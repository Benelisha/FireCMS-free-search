import {FirestoreTextSearchController} from "firecms";

interface MyObject {
    id: string;
    data: string[];
}
const paths: { [pathName: string]: MyObject[] } = {};
const ShowLogs = false;

export class Searcher {

    static timeoutId: NodeJS.Timeout | undefined;
    static debounceTime = 300;
    static textSearchController: FirestoreTextSearchController = ({ path, searchString }) => {
        // Clear previous timeout if exists
        if (Searcher.timeoutId) {
            clearTimeout(Searcher.timeoutId);
        }
        // Create a new Promise to wrap the search logic
        return new Promise<readonly string[]>((resolve) => {
            // Schedule a new search with a delay of 300 milliseconds
            Searcher.timeoutId = setTimeout(() => {
                const result = Searcher.filterObjectsByData(path, searchString);
                if (ShowLogs) console.log('Search->', searchString, result);

                // Resolve the Promise with the search results or empty array if undefined
                resolve(result || []);
            }, Searcher.debounceTime);
        });
    };








    static clearMap(): void {
        Object.keys(paths).forEach((key) => delete paths[key]);
    }








    static addObjectIfNotExists(path: string, id: string, newData: string[]): void {
        const objects = paths[path] || [];
        const existingObject = objects.find(obj => obj.id === id);
        if (existingObject) {
            existingObject.data = newData;
            if (ShowLogs) console.log(`Updated object with ID ${id} in path ${path}.`);
        } else {
            const newObject: MyObject = { id, data: newData };
            objects.push(newObject);
            paths[path] = objects;
            if (ShowLogs) console.log(`Added object with ID ${id} to path ${path}.`);
        }
    }








    static deleteObjectById(path: string, id: string): void {
        const objects = paths[path] || [];
        const index = objects.findIndex(obj => obj.id === id);
        if (index !== -1) {
            objects.splice(index, 1);
            if (ShowLogs) console.log(`Deleted object with ID ${id} from path ${path}.`);
        } else {
            if (ShowLogs) console.log(`Object with ID ${id} does not exist in path ${path}. Nothing to delete.`);
        }
    }








    static filterObjectsByData(path: string, input: string): Promise<readonly string[]> | undefined {

        const objects = paths[path] || [];
        const lowercasedInput = input.toLowerCase();
        const filteredObjects = objects.filter(obj =>
            obj.data.some(data => {
                const lowercasedData = data.toLowerCase();
                let inputIndex = 0;
                for (let i = 0; i < lowercasedData.length; i++) {
                    if (lowercasedData[i] === lowercasedInput[inputIndex]) {
                        inputIndex++;
                    }
                    if (inputIndex === lowercasedInput.length) {
                        return true;
                    }
                }
                return false;
            })
        );
        const ids = filteredObjects.map(obj => obj.id);

        if (ShowLogs) console.log('Search->', input, ids);

        return Promise.resolve(ids);
    }


}


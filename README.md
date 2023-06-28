# FireCMS Search Extension

The FireCMS Search Extension is an external class that extends the functionality of the FireCMS library. FireCMS is a powerful library for creating administration panels for Firestore databases. However, the default functionality of FireCMS does not include search capabilities out of the box.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
* Search Functionality: Enhance your Firestore-based admin panel with a search capability. The FireCMS Search Extension provides a simple yet effective way to search through your Firestore data.
* Seamless Integration: Integrate the search extension seamlessly into your existing FireCMS implementation without extensive modifications or dependencies.
* Customizable: Customize the search functionality to meet your specific requirements. Modify the search behavior, search fields, or indexing strategies to best fit your Firestore data structure.
* Efficient Data Exploration: Enable efficient data exploration by allowing administrators to quickly find relevant information within your Firestore database.
* Free and Open-Source: The FireCMS Search Extension is completely free to use, and the source code is available on GitHub. Feel free to contribute, suggest improvements, or customize it to suit your needs.

## Installation
Copy the searcher.tsx file from this repository and place it anywhere in your project directory.

## Usage
1) Open the Firestore collection(s) in which you want to enable search functionality. Add the buildEntityCallbacks function to the collection's configuration to handle search-related actions. Here's an example of how to use buildEntityCallbacks:

```
import { buildEntityCallbacks } from './searcher';

const exampleCallback = buildEntityCallbacks({
  onSaveSuccess: (entity) => {
        Searcher.addObjectIfNotExists(entity.path, entity.entityId, [entity.values.name]);
  },
  onFetch: ({ collection, context, entity, path }) => {
    Searcher.addObjectIfNotExists(path, entity.id, [entity.values.name]);
    return entity;
  },
  onDelete: (props) => {
    Searcher.deleteObjectById(props.entity.path, props.entityId);
  },
});

export const exampleCollections = buildCollection<ExampleEntity>({
    name: "ExampleCollections",
    singularName: "ExampleCollection",
    path: "CollectionPath",
    *** textSearchEnabled: true, ***
    *** callbacks: exampleCallback, ***
    properties: {...
```


2) In your App.tsx file (or any other suitable location as mentioned in the documentation), add the textSearchController function. This function will handle the actual search functionality. Here's an example of how to define the textSearchController:
```
import { FirestoreTextSearchController } from 'firecms';
...
return <FirebaseCMSApp
        name={"FireCMS-free-search"}
        *** textSearchController={Searcher.textSearchController} ***
        authentication={myAuthenticator}
        collections={[exampleCollections]}
        firebaseConfig={firebaseConfig}
    />;
```

## Configuration
Open the file where you are calling Searcher.addObjectIfNotExists(path, entity.id, [entity.values.name]).

In the third parameter of the Searcher.addObjectIfNotExists function, provide an array of values that you want to enable search on. This array can contain any relevant properties or fields from your Firestore collection that you want to include in the search.
For example, if your Firestore collection contains a name field that you want to include in the search, you can modify the code as follows:
```
Searcher.addObjectIfNotExists(path, entity.id, [entity.values.name, entity.values.description, etc...]);
```


## Contributing
We welcome contributions from the community to help improve the FireCMS Search Extension. If you have any ideas, suggestions, bug fixes, or enhancements, please feel free to contribute.


## License
The FireCMS Search Extension is open and free for everyone to use. It is distributed under the MIT License, which allows you to use, modify, and distribute the extension for both personal and commercial purposes.

You can find the full text of the MIT License in the LICENSE file.

We welcome contributions and suggestions to improve the FireCMS Search Extension. Feel free to fork the repository, make changes, and submit pull requests.


## Acknowledgments
We would like to acknowledge that while the search implementation provided by the FireCMS Search Extension may not be the most advanced or sophisticated solution available, it offers a simple and effective way to enable search functionality within your Firestore-based admin panel.

We understand that there are various third-party apps and services that offer more comprehensive search capabilities, but they often come with associated costs and complex configuration requirements. The FireCMS Search Extension aims to provide a lightweight and accessible alternative, allowing you to avoid the hassle and expenses associated with integrating external search services.

We appreciate your understanding and hope that the FireCMS Search Extension proves to be a useful tool for your project.


## Contact
For any questions, suggestions, or feedback regarding the FireCMS Search Extension, please feel free to reach out to us.
Contact: Ease99studio@gmail.com
or [Ease99](https://Ease99.com)


---

Good luck with your project!

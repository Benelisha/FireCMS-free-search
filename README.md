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

To integrate the FireCMS Search Extension into your project, follow the steps below:

Copy the searcher.tsx file from this repository and place it anywhere in your project directory.

Open the Firestore collection(s) in which you want to enable search functionality. Add the buildEntityCallbacks function to the collection's configuration to handle search-related actions. Here's an example of how to use buildEntityCallbacks:
'''
import { buildEntityCallbacks } from './searcher';

const exampleCallback = buildEntityCallbacks({
  onDelete: (props) => {
    Searcher.deleteObjectById(props.entity.path, props.entityId);
  },
  onFetch: ({ collection, context, entity, path }) => {
    Searcher.addObjectIfNotExists(path, entity.id, [entity.values.name]);
    return entity;
  },
});
'''



## Usage

Demonstrate how to use your project, providing code examples or step-by-step instructions. Include screenshots or GIFs if applicable.

## Configuration

Explain any configuration options or settings that users can modify to customize the behavior of your project. Provide clear instructions and examples.

## Contributing

Describe how others can contribute to your project. Include guidelines for bug reports, feature requests, and pull requests. Mention any code formatting or style conventions that contributors should follow. Provide information on how to contact you or your team.

## License

Specify the license under which your project is distributed. For example, if you use an open-source license like MIT or Apache, include the license text or provide a link to it.

## Acknowledgments

If there are any individuals or projects that have inspired or assisted your work, acknowledge them here. You can also include links to external resources that have been helpful.

## Contact

Provide your contact information, such as your email address or a link to your personal website or social media profiles, so that users can reach out to you if they have any questions or feedback.

---

Feel free to customize this template to fit your specific project. Make sure to provide clear and concise information, use proper formatting and styling, and include any relevant links or resources. A well-written README file will help users understand your project and encourage them to engage with it.

Good luck with your project!

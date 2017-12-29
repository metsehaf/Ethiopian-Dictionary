# Ethiopian Dictionary
This project was designed to teach some basic Amharic terms to anyone who wishes to learn some Amharic, the challenge to anyone who is on this page is to find words and add to the dictionary application. Please send pull requests.
# Documentation
Please refer to [node.js site](https://nodejs.org/en/) and
[npm registry for express](https://www.npmjs.com/package/express) on how to create a webserver to serve the static files hosted here. The [app.js](app.js) is the file in which the **express**, **cors** and **body-parser** module are imported in to. 

# Installation
After forking this repository and downloading it, you will notice that there are three dependencies on the package.json file, you have to install all three of them. However, before doing that you have to install the latest and most stable version of node.js to your computer at [node.js site](https://nodejs.org/en/). After installing node.js you could install all three modules to the directory where the [package.json](package.json) exists by writing the following command on your command line `npm install`, however if those three dependencies did not exist in package.json, you could individually install them with the following command `npm install "dependency" --save`. The save flag will add the dependencies to your package.json file


# Dependencies
The express module is used here to simplify the creation of the web servers and the cors(cross origin resource sharing) module is going to allow our dictionary api to be accessible to other domains. The body-parser module allows us to parse the form variables which could be sometimes url-encoded or json-encoded.


# Author
Girum Hagos

# More information
[node.js site](https://nodejs.org/en/)
[npm registry for express](https://www.npmjs.com/package/express)


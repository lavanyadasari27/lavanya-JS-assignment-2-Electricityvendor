# lavanya-assignment4-task2

This project deals with the 3 electicity vendors in a village, each will have different charge rate, the overall cost, the total reading and the discounted price is added.
### TABLE OF CONTENTS
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)

### INSTALLATION
1. Install npm: \
    1.Download the .pkg Installer: \
    Node provides a .pkg installer for Mac. We can also download from its official website https://nodejs.org/en/download. Click on the “ macOS Installer ” option to download the .pkg installer.

    2.Run Node.js Installer: \
    Installer is ready to run.
```
Introduction > Continue License > Select Continue > Agree Installation Type > Install > Authenticate with your Mac to allow the Installation > Install Software Summary > Close.
```
3. Update Your NPM Version: Node.js doesn’t automatically update the version of npm.Write a given command and your npm version will be updated.
```
$ sudo npm install npm --global
```
  
### USAGE

1. To test this code, we need to run 
 ```
npm run run
npm run test
```
2.Open your package.json file add the following line under scripts section, 
```
"scripts": {
// ... other commands
	"test": "jest",
	"test-cov": "jest --coverage"
},
```
To run test coverage run
```
npm run test-cov
```


### LICENSE
1. This project is licensed under the MIT License.
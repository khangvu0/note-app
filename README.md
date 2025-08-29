# 📝 Note App

A command-line application built with Node.js that allows users to create, read, list, and remove notes.  
This project was developed by following along with [Andrew Mead's The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/).  

The app demonstrates foundational Node.js concepts such as the module system, working with the file system, parsing command-line arguments, and debugging.

## Features
- Add new notes with a title and body.
- List all saved notes.
- Read individual notes by title.
- Remove notes by title.
- Stores data locally in JSON format.
- Simple and intuitive CLI commands.

## Key Concepts Learned
This project was part of the following sections of the course:
1. **Node.js Module System** – creating and exporting custom modules.  
2. **File System & Command Line Args** – using Node’s `fs` module and parsing CLI arguments with `yargs`.  
3. **Debugging Node.js** – using `console.log()` and Node.js built-in debugger for troubleshooting.  

## Technologies Used
- **Node.js**  
- **Yargs** (for command-line argument parsing)  
- **Chalk** (for colored CLI output)  
- **File System (fs)**  

## Screenshot
![Screenshot 1](/images/preview.png)

## Setup & Installation
1. Clone this repository:
   ```bash
   git clone git@github.com:khangvu0/note-app.git
   cd note-app

2. Install dependencies:
    ```bash
    npm install

3. Run commands using Node.js
    ```bash
    node app.js add --title="Shopping" --body="Buy milk and eggs"
    node app.js list
    node app.js read --title="Shopping"
    node app.js remove --title="Shopping"
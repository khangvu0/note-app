const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()   // loadNotes makes notes an object of JSON data
    // const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNote = notes.find(note => note.title === title)  // Finds and stops on the first match

    if (!duplicateNote) {
        notes.push({                // Append new note to notes object
            title: title,
            body: body
        })
        
        saveNotes(notes)            // Save notes / write notes into notes.json
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = title =>  {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.inverse('Your notes'));

    notes.forEach(note => {
        console.log(note.title);
    })
}

const readNote = title => {
    const notes = loadNotes()

    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
}

const saveNotes = notes => {
    // JS method that takes an object/array/anything and returns the JSON string representation
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')    // Read file -> gets us binary data
        const dataJSON = dataBuffer.toString()              // Converts binary data into string
        return JSON.parse(dataJSON)                         // Parse JSON data into an object
    } 

    // If there is no data, return empty array
    catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
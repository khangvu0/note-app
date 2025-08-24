const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()   // loadNotes makes notes an object of JSON data
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    }) 

    if (duplicateNotes.length === 0) {
        notes.push({                // Append new note to notes object
            title: title,
            body: body
        })
        
        saveNotes(notes)            // Save notes / write notes into notes.json
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = function (notes) {
    // JS method that takes an object/array/anything and returns the JSON string representation
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
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
    removeNote: removeNote
}
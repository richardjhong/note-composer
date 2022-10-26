const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// alreadyUsedUUID helps keep track of current ids already in use
const alreadyUsedUUID = [];

notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => {
    const parsedData = JSON.parse(data);
    parsedData.forEach(obj => {
      if (obj.id) alreadyUsedUUID.push(obj.id)
    });

    res.json(parsedData);
  });
});


// if the initialized noteUuid's id already exists in 
// alreadyUsedUUID, then invoke uuid again and assign another
// id
notes.post('/', (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    let noteUuid = uuid();
    if (alreadyUsedUUID.indexOf(noteUuid) !== -1) {
      while (alreadyUsedUUID.indexOf(noteUuid) !== -1) {
        noteUuid = uuid();
      }
    }

    const newNotes = {
      title, 
      text,
      id: uuid()
    };

    readAndAppend(newNotes, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
})

// filter parsedData and return a new array of notes that have ids
// not matching that of toDeleteId; once that is done writeToFile rewrites
// db.json with the filtered notes
notes.delete('/:uuid', (req, res) => {
  const toDeleteId = req.params.uuid;

  readFromFile('./db/db.json').then((data) => {
    const parsedData = JSON.parse(data);
    const filteredNotes = parsedData.filter(note => !(note.id === toDeleteId));

    writeToFile('./db/db.json', filteredNotes);
    res.send('Note successfully deleted');
  });
});

module.exports = notes;
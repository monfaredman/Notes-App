const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, author) => {
  const notes = readNote();
  const isDuplicate = notes.filter(
    (x) => x.title === title && x.author === author
  );
  if (!isDuplicate.length) {
    const newNote = { title: title, author: author };
    notes.push(newNote);
    saveNote(notes);
  } else {
    console.log("note is repetitive!");
  }
};
const removeNote = (title) => {
  const notes = readNote();
  const keepNotes = notes.filter((x) => x.title !== title);
  if (!notes.find((x) => x.title === title)) {
    console.log("note isn`t exist!");
  }
  saveNote(keepNotes);
};
saveNote = (newNote) => {
  fs.writeFileSync("1-json.json", JSON.stringify(newNote));
};
const readNote = () => {
  try {
    return JSON.parse(fs.readFileSync("1-json.json").toString());
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  readNote: readNote,
  removeNote: removeNote,
};

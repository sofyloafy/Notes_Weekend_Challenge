(function (exports) {
  function NoteList() {
    this.notes = [];
    this.id = 0;
  }

  NoteList.prototype.addNote = function (note, id=this.id) {
    this.notes.push(new Note(note, id));
    this.id ++
  };

  NoteList.prototype.returnNote = function () {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);

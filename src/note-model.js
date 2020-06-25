(function (exports) {
  function Note(text) {
    this.id = 0
    this.text = text;
  }

  Note.prototype.returnText = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);

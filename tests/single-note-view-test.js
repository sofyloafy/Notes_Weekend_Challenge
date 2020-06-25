
function constructsWithANoteModel() {
    let list = new Note();
    let singleView = new SingleNoteView(list);
    expect.isTrue(singleView.noteModel instanceof Note);
}
constructsWithANoteModel();
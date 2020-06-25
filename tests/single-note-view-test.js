
function constructsWithANoteModel() {
  let list = new Note();
  let singleView = new SingleNoteView(list);
  expect.isTrue(singleView.noteModel instanceof Note);
}
constructsWithANoteModel();

function returnsStringOfHtml() {
  let list = new Note("Favourite drink: BEER");
  let singleView = new SingleNoteView(list);
  expect.isTrue(singleView.returnView() === "<div>Favourite drink: BEER</div>")
}
returnsStringOfHtml();
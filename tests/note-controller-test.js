
function noteControllerInstance() {
   let controller = new NoteController();
   expect.isTrue(controller instanceof NoteController)
}

noteControllerInstance();
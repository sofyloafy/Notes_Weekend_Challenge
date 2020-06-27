
(function (exports) {

    function NoteController(Notelist) {
        this.noteListModel = Notelist;
        this.view = new NoteListView(this.noteListModel)
    }

    NoteController.prototype.getHTML = function () {
        const app = document.getElementById('app')
        let newNote = document.createElement('div')
            newNote.innerHTML = this.view.returnHTML();
            app.appendChild(newNote)
    }

    exports.NoteController = NoteController;
})(this);


    window.addEventListener('submit', function(event){
        event.preventDefault();
        var textEvent = (event.target[0].value)
        var list = new NoteList();
        var controller = new NoteController(list);
        controller.noteListModel.addNote(textEvent)
        console.log(controller)
        controller.getHTML();
        console.log(controller.noteListModel.returnNote()[0].text);
        return textEvent

    })


    // window.addEventListener('DOMContentLoaded', function(event){
    //     var list = new NoteList();
    //     var controller = new NoteController(list);
    //     controller.getHTML();

    window.addEventListener("hashchange", function(event) {
        var list = new NoteList();
        var controller = new NoteController(list);
        var id = window.location.hash.split('#')[1]
        console.log(window.location.hash)
        console.log(controller.noteListModel)
        var note = controller.noteListModel.returnNote()[id]
        // var singleNoteView = new SingleNoteView(note)
        // var html = singleNoteView.returnView()

    });
    // });

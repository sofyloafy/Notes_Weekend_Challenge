
(function (exports) {
    function NoteListView(notelist) {
        this.frame = notelist;
    }

    NoteListView.prototype.returnHTML = function () {
        var array = this.frame.returnNote()
        var element = array.map(function(note) {
            console.log(note.text.slice(0, 19))
            return note.text.slice(0, 19)
    
        });
        // console.log(element)
        // console.log("<ul><li><div>" + element.join("</div></li><li><div>") + "</div></li></ul>")

        return "<ul><li><div>" + element.join("</div></li><li><div>") + "</div></li></ul>"
        
        // var output = ""

        // if (array.length === 0) {
        //     return "<ul><li><div></div></li></ul>"
        // }

        // else {
        //     array.forEach((note) => {
        //         output += `<li><div>${note.returnText()}</div></li>`
        //     })
        //     console.log(`<ul>${output}</ul>`)
        //     return `<ul>${output}</ul>`
        // }

    }
    exports.NoteListView = NoteListView;
})(this);


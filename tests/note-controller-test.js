
function noteControllerInstance() {
   let controller = new NoteController();
   expect.isTrue(controller instanceof NoteController)
}

noteControllerInstance();

function checkInnerHTMLPropertyValue() {
   let notelist = new NoteList();
       notelist.addNote("Favourite food: pesto");
   let view = new NoteController(notelist); 
   view.getHTML(); 
   let string = "<ul><li><div>Favourite food: pesto</div></li></ul>"
   
   expect.isTrue(document.getElementById('app').innerHTML === string)
}

checkInnerHTMLPropertyValue();

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
   let string = `<ul><a href="#0"><li><div> Favourite food: pest</div></li></a></ul>`
   
   expect.isTrue(document.getElementById('app').innerHTML === string)
}
checkInnerHTMLPropertyValue();



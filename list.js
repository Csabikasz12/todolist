
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {

  var inputValue = document.getElementById("myInput").value;
  var selectedDayId = document.getElementById("daySelect").value;

  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputValue));

  // hozzáadás a kiválasztott naphoz
  var targetDay = document.getElementById(selectedDayId);
  targetDay.appendChild(li);

  document.getElementById("myInput").value = "";

  // close gomb hozzáadása
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    this.parentElement.style.display = "none";
  };
}

// Napok kattintásra lenyílnak
var days = document.querySelectorAll("ul > li");

for (let i = 0; i < days.length; i++) {

  // kihagyjuk az első üres li-t
  if(days[i].innerText.trim() !== ""){

    // létrehozunk egy belső listát
    var innerList = document.createElement("ul");
    innerList.className = "daycontent";
    days[i].appendChild(innerList);

    days[i].addEventListener("click", function(e){

      // csak ha a fő elemre kattintunk
      if(e.target === this){
        this.classList.toggle("open");
      }

    });
  }
}




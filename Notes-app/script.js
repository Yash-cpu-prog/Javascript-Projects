const addBtn = document.getElementById("add-btn");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

// Load existing notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">🗑</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText === "") {
    alert("Please write something!");
    return;
  }
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  showNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

addBtn.addEventListener("click", addNote);

// Display notes on load
showNotes();

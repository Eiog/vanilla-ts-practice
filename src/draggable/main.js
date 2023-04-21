const box = document.querySelector(".box");
const items = document.querySelectorAll(".box-item");
let draggedHandle = null;
function onDrag() {
  console.log("drag");
}
function onDragEnd() {
  console.log("dragend");
  this.classList.remove("dragging");
}
function onDragEnter() {
  console.log("dragenter");
  this.classList.add("dragged");
}
function onDragLeave() {
  console.log("dragleave");
  this.classList.remove("dragged");
}
function onDragOver(e) {
  console.log("dragover");
  e.preventDefault();
  e.dataTransfer.effectAllowed = "move";
}
function onDragStart(e) {
  console.log("dragstart");
  draggedHandle = this;
  e.dataTransfer.effectAllowed = "move";
  this.classList.add("dragging");
}
function onDrop() {
  console.log("drop");
  const dropHandle = this;
  dropHandle.classList.remove("dragged");
}
items.forEach((item) => {
  item.addEventListener("drag", onDrag);
  item.addEventListener("dragend", onDragEnd);
  item.addEventListener("dragenter", onDragEnter);
  item.addEventListener("dragleave", onDragLeave);
  item.addEventListener("dragover", onDragOver);
  item.addEventListener("dragstart", onDragStart);
  item.addEventListener("drop", onDrop);
});

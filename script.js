document.addEventListener("DOMContentLoaded", function() {
    const dragItems = document.querySelectorAll(".drag-item");
    const dropZone = document.querySelector(".drop-zone");
    const resetButton = document.querySelector(".reset-button");
  
    let draggedItem = null;
  
    dragItems.forEach(function(item) {
      item.addEventListener("dragstart", function() {
        draggedItem = item;
        item.style.opacity = "0.5";
      });
  
      item.addEventListener("dragend", function() {
        draggedItem = null;
        item.style.opacity = "1";
      });
    });
  
    dropZone.addEventListener("dragover", function(event) {
      event.preventDefault();
    });
  
    dropZone.addEventListener("dragenter", function(event) {
      dropZone.classList.add("drag-over");
    });
  
    dropZone.addEventListener("dragleave", function(event) {
      dropZone.classList.remove("drag-over");
    });
  
    dropZone.addEventListener("drop", function(event) {
      event.preventDefault();
      dropZone.classList.remove("drag-over");
  
      if (draggedItem !== null) {
        dropZone.appendChild(draggedItem);
        draggedItem = null;
      }
    });
  
    resetButton.addEventListener("click", function() {
      dropZone.innerHTML = "";
      const dragItemsParent = document.querySelector(".drag-items");
      dragItems.forEach(function(item) {
        dragItemsParent.appendChild(item);
      });
    });
  });
  
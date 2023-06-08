// Get references to containers and items
const containers = document.querySelectorAll(".container");
const items = document.querySelectorAll(".item");

// Add event listeners to containers
containers.forEach((container) => {
  // Allow dropping items
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    container.classList.add("hovered");
  });

  // Remove hover effect when leaving container
  container.addEventListener("dragleave", () => {
    container.classList.remove("hovered");
  });

  // Handle item drop
  container.addEventListener("drop", (e) => {
    container.classList.remove("hovered");
    const item = document.querySelector(".dragging");
    if (container.id === "container2") {
      container.appendChild(item);
    } else if (container.id === "container1") {
      container.appendChild(item);
    }
  });
});

// Add event listeners to items
items.forEach((item) => {
  // Set dragging state
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });

  // Remove dragging state
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });

  // Handle touch-based dragging (for mobile)
  item.addEventListener("touchstart", (e) => {
    item.classList.add("dragging");
    const touch = e.targetTouches[0];
    item.initialTouchX = touch.clientX;
    item.initialTouchY = touch.clientY;
  });

  item.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.targetTouches[0];
    const offsetX = touch.clientX - item.initialTouchX;
    const offsetY = touch.clientY - item.initialTouchY;
    item.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  item.addEventListener("touchend", (e) => {
    item.classList.remove("dragging");
    item.style.transform = "none";

    const touch = e.changedTouches[0];
    const container = document.elementFromPoint(touch.clientX, touch.clientY);
    if (container && container.classList.contains("container")) {
      container.appendChild(item);
    }
  });
});

// Reset button functionality
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  const container1 = document.querySelector("#container1");
  const container2 = document.querySelector("#container2");
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    container1.appendChild(item);
  });
  container2.innerHTML = "";
});

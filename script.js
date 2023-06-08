/*
1. Implement a drag and drop functionality using HTML, CSS, and JavaScript.
        2. Create two containers (e.g., div elements) side by side on the page.
        3. Populate the first container with a list of items (e.g., images, text, or icons).
        4. Allow users to drag and drop items from the first container to the second container.
        5. Provide visual feedback during dragging (e.g., change the appearance of the dragged item).
        6. When an item is dropped into the second container, display a success message or update the UI in any appropriate way.
        7. Add a reset button to clear the second container and reset the first container to its original state.
 */

const containers = document.querySelectorAll(".container");

const items = document.querySelectorAll(".item");

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        container.classList.add("hovered");
    });

    container.addEventListener("dragleave", () => {
        container.classList.remove("hovered");
    });
    container.addEventListener("drop", (e) => {
        container.classList.remove("hovered");
        const item = document.querySelector(".dragging");
        if (container.id === "container2") {
            container.appendChild(item);
        }
        else if (container.id === "container1") {
            container.appendChild(item);
        }
    });
});


items.forEach((item) => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    /* put all items back in container1 */
    const container1 = document.querySelector("#container1");
    const container2 = document.querySelector("#container2");
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        container1.appendChild(item);
    }
    );
    /* clear container2 */
    container2.innerHTML = "";
});
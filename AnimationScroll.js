let box = document.getElementsByClassName("box");

// Convert the NodeList to an array using Array.from
let boxArray = Array.from(box);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxArray.forEach((boxes) => {
    const boxTop = boxes.getBoundingClientRect().top;
    if (boxTop <= triggerBottom) {
      boxes.classList.add('show');
    } else {
      boxes.classList.remove('show');
    }
  });
}

window.addEventListener("scroll", checkBoxes);

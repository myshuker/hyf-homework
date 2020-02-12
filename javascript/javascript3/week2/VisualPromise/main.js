// write a variables :
const redPlace = document.querySelector("li:nth-child(1)");
const bluePlace = document.querySelector("li:nth-child(2)");
const greenPlace = document.querySelector("li:nth-child(3)");

const action1 = moveElement(redPlace, { x: 20, y: 300 });
const action2 = moveElement(bluePlace, { x: 400, y: 300 });
const action3 = moveElement(greenPlace, { x: 400, y: 20 });

// move element one by one

function translateOneByOne() {
  action1
    .then(() => {
      console.log("Red element has been moved");
      return action2;
    })
    .then(() => {
      console.log("Blue element has been moved");
      return action3;
    })
    .then(() => {
      console.log("Green element has been moved");
    });
}

translateOneByOne();

// move elements at the same time

const actions = [action1, action2, action3];
function translateAllAtOnce(promises) {
  Promise.all(promises).then(() => {
    console.log("All elements has been moved");
  });
}

translateAllAtOnce(actions);

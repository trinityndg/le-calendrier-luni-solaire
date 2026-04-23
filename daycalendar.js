const container = document.getElementById("month");

// April 2026 layout (tightened to fit screen)
const positions = [
  [10,18],[2,7],[22,24],[5,45],[40,16],
  [32,0],[30,34],[53,6],[65,4],[80,0],
  [88,18],[72,20],[1,78],[15,70],[6,86],
  [26,62],[35,56],[30,90],[46,38],[50,50],
  [60,45],[42,80],[51,83],[81,44],[90,50],
  [67,60],[69,95],[75,82],[90,77],[86,92]
];

// key lunar days April 2026 (approx real)
const lunarPhases = {
  1: "new",
  8: "first-quarter",
  15: "full",
  23: "last-quarter"
};

// determine moon shape
function createMoon(phaseType, day) {
  const moon = document.createElement("div");
  moon.classList.add("moon");

  if (phaseType === "new") {
    moon.style.background = "transparent";
    moon.style.border = "2px solid rgb(180,20,20)";
  }

  else if (phaseType === "first-quarter") {
    moon.style.background = "linear-gradient(to right, rgb(180,20,20) 50%, white 50%)";
  }

  else if (phaseType === "full") {
    moon.style.background = "rgb(180,20,20)";
  }

  else if (phaseType === "last-quarter") {
    moon.style.background = "linear-gradient(to left, rgb(180,20,20) 50%, white 50%)";
  }

  else {
    // intermediate phases (approximation)
    let ratio = day / 30;
    moon.style.background = `radial-gradient(circle at ${ratio*100}% 50%, rgb(180,20,20) 40%, white 41%)`;
  }

  return moon;
}

// create days
for (let i = 1; i <= 30; i++) {

  const div = document.createElement("div");
  div.classList.add("day");

  // size logic
  if (lunarPhases[i]) {
    div.classList.add("large");
  } else if (i % 2 === 0) {
    div.classList.add("medium");
  } else {
    div.classList.add("small");
  }

  // position (percentage for responsiveness)
  div.style.left = positions[i-1][0] + "%";
  div.style.top = positions[i-1][1] + "%";

  // number
  div.innerHTML = `<div>${i}</div>`;

  // moon
  let phaseType = lunarPhases[i];
  const moon = createMoon(phaseType, i);
  div.appendChild(moon);

  container.appendChild(div);
}
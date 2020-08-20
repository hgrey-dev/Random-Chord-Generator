// for (let i = 0; i < 4; i++) {
//   const chordsInKeyOf = ["Am", "CMaj7", "D", "G", "Em", "FMaj7"];
//   const random =
//     chordsInKeyOf[Math.floor(Math.random() * chordsInKeyOf.length)];
//   console.log(random);
// }

function newProgression() {
  const body = document.getElementById("body");
  newDiv = document.createElement("div");
  body.appendChild(newDiv);
  newDiv.classList.add("body");

  for (let i = 0; i < 4; i++) {
    newPara = document.createElement("p");
    newDiv.appendChild(newPara);
    newPara.classList.add("chords");

    const chordsInKeyOf = [
      "Am",
      "CMaj7",
      "D",
      "G",
      "Em",
      "FMaj7",
      "Bm",
      "E",
      "A",
    ];
    const random =
      chordsInKeyOf[Math.floor(Math.random() * chordsInKeyOf.length)];
    console.log(random);
    newPara.innerHTML = random;
  }
  function resetChords() {
    window.location.reload();
  }
  removeBtn = document.getElementById("removeBtn");
  removeBtn.addEventListener("click", resetChords);
}
newProgression();

newBtn1 = document.getElementById("newProgBtn");
newBtn1.addEventListener("click", newProgression);

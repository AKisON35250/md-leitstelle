const anzahlStreifen = 20;
const streifenContainer = document.getElementById("streifen-container");

function updateLeitung() {
  const leiter = document.getElementById("leitung-eingabe").value;
  document.getElementById("leitung-anzeige").innerText = leiter
    ? `Aktuell: ${leiter}`
    : `Aktuell: Keine Einsatzleitung`;
}

function createStreifen() {
  for (let i = 1; i <= anzahlStreifen; i++) {
    const div = document.createElement("div");
    div.className = "streifen";
    div.innerHTML = `<h3>Streifen ${i}</h3>`;

    for (let j = 1; j <= 3; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Sitz ${j} – Name`;
      input.addEventListener("input", updateStatistik);
      div.appendChild(input);
    }

    streifenContainer.appendChild(div);
  }
}

function updateStatistik() {
  const allInputs = document.querySelectorAll(".streifen input");
  const belegt = [...allInputs].filter(i => i.value.trim() !== "");
  document.getElementById("anzahl-aktive").innerText = `${belegt.length} Einsatzkräfte eingetragen`;
}

createStreifen();

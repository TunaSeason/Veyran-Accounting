let spellsCast = 0;
let triggers = 0;
let copies = 0;

const spellEl = document.getElementById("spells");
const triggerEl = document.getElementById("triggers");
const copyEl = document.getElementById("copies");

const veyranBox = document.getElementById("veyran");
const krarkBox = document.getElementById("krarkashima");

document.getElementById("castSpell").addEventListener("click", () => {
  spellsCast += 1;

  let triggerCount = 1;

  if (veyranBox.checked) {
    triggerCount *= 2;
  }

  let krarkTriggers = krarkBox.checked ? 2 : 0;
  let copyCount = krarkBox.checked ? 2 : 0;

  triggers += triggerCount + krarkTriggers;
  copies += copyCount;

  updateDisplay();
});

document.getElementById("reset").addEventListener("click", () => {
  spellsCast = 0;
  triggers = 0;
  copies = 0;
  updateDisplay();
});

function updateDisplay() {
  spellEl.textContent = spellsCast;
  triggerEl.textContent = triggers;
  copyEl.textContent = copies;
}

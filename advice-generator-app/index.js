function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then(({ slip }) => renderResult(slip));
}

function renderResult({ id, advice }) {
  const idEl = document.getElementById("advice-id");
  const textEl = document.getElementById("advice-text");

  idEl.textContent = `ADVICE #${id}`;
  textEl.textContent = `"${advice}"`;
}

getAdvice();

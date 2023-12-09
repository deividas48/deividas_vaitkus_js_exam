/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputSearchValue = inputSearch.value;
  const object = {
    lb: inputSearchValue * 2.2046,
    g: inputSearchValue / 0.001,
    oz: inputSearchValue * 35.274,
  };

  const outputEl = document.getElementById("output");

  //Norint kad būtų tik paskutinis skaičiavimas:
  while (outputEl.firstChild) {
    outputEl.removeChild(outputEl.firstChild);
  }

  for (const unit in object) {
    const ulEl = document.createElement("ul");
    outputEl.append(ulEl);
    const liEl = document.createElement("li");
    ulEl.append(liEl);
    liEl.textContent = `${unit}: ${object[unit]}`;
  }
});

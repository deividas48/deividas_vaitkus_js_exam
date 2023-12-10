/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  fetchU();
  document.getElementById("output").textContent = "";
});

const fetchU = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      renderUser(data);
    }
  } catch (error) {
    console.error(error);
  }
};

renderUser = (users) => {
  users.forEach((user) => {
    const outputEl = document.getElementById("output");

    const cardEl = document.createElement("figure");
    outputEl.append(cardEl);

    const imgEl = document.createElement("img");
    cardEl.append(imgEl);
    imgEl.classList.add('avatarImg');
    imgEl.alt = `${user.login} avatar`;
    imgEl.src = user.avatar_url;

    const paragEl = document.createElement("p");
    cardEl.append(paragEl);
    paragEl.classList.add('loginName');
    paragEl.textContent = user.login;
  });
};

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

//Fetch
const fetchData = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      renderCar(data);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
  }
};
fetchData();

const outputDiv = document.getElementById("output");

//Create cards
renderCar = (cars) => {
  cars.forEach((element) => {
    const card = document.createElement("figure");
    outputDiv.append(card);
    card.classList.add("carCard");

    const h2ElBrand = document.createElement("h2");
    card.append(h2ElBrand);
    h2ElBrand.textContent = element.brand;
    
    const ulElModel = document.createElement("ul");
    card.append(ulElModel);

    //Create models li and adding commas
    element.models.forEach((model, index) => {
        const liElModel = document.createElement("li");
        ulElModel.append(liElModel);
        liElModel.textContent = model;
        if (index < element.models.length - 1) {
            liElModel.textContent += ",";
        }
      });
  });
};

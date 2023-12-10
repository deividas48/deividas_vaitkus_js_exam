/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        renderCar(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();

  const outputDiv = document.getElementById("output");

  renderCar = (cars) => {
    cars.forEach(element => {
        const card = document.createElement("figure");
        outputDiv.append(card);
        
        const h2ElBrand = document.createElement("h2");
        card.append(h2ElBrand);
        h2ElBrand.textContent = element.brand;

        const paragraphElModel = document.createElement("p");
        card.append(paragraphElModel);
        paragraphElModel.textContent = element.models;
    });
  };

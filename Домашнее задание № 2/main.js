function addCountry() {
  let item = document.getElementById("hiddenItems");
  if (item.style.display == "none") item.style.display = "block";
  else item.style.display = "none";
}

function getInfo() {
  let item = document.getElementById("secondBlockhiddenItems");
  if (item.style.display == "none") item.style.display = "block";
  else item.style.display = "none";
}

function deleteCountries() {
  let item = document.getElementById("deleteCountries");
  if (item.style.display == "none") item.style.display = "block";
  else item.style.display = "none";
}

const arr = [];

let putInfo = function () {
  let info = document.getElementById("hiddenInput").value;
  let info2 = document.getElementById("hiddenInput2").value;
  let countryObject = {
    country: "",
    capital: "",
  };
  countryObject.country = info;
  countryObject.capital = info2;
  arr.push(countryObject);
  storageArr = JSON.stringify(arr);
  localStorage.setItem("d", storageArr);
  document.getElementById("hiddenInput").value = "";
  document.getElementById("hiddenInput2").value = "";
};

let showCountries = function () {
  let info = "";
  for (i = 0; i < arr.length; i++) {
    let showCountry = arr[i].country;
    info += `<p>${showCountry}</p>`;
  }
  const card = document.getElementById("addInfo");
  card.innerHTML = info;
};

let getInfoCapital = function () {
  let info = "";
  for (i = 0; i < arr.length; i++) {
    let showCapital = arr[i].capital;
    info += `<p>${showCapital}</p>`;
  }
  const card = document.getElementById("showCapital");
  card.innerHTML = info;
  document.getElementById("secondBlockHiddenInput").value = "";
};

let deleteCountry = function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].country == "russia") {
      let removedObject = arr.splice(i, 1);
      removedObject = null;
      break;
    }
  }
};

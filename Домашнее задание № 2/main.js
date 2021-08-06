let ShowInput = document.getElementById("putInfo");

function inputVisibility(ShowInput) {
  let item = document.getElementById("hiddenItems");
  if (item.style.display == "none") item.style.display = "block";
  else item.style.display = "none";
}

let secondBlockShowInput = document.getElementById("getInfo");

function secondBlockHiddenInputVisibility(secondBlockShowInput) {
  let item = document.getElementById("secondBlockhiddenItems");
  if (item.style.display == "none") item.style.display = "block";
  else item.style.display = "none";
}

const arr = [];

let countryObject = {
  country: "",
  capital: "",
};

let secondButton = document.getElementById("btn1");

secondButton.onclick = function pushInfo() {
  let info = document.getElementById("hiddenInput").value;
  let info2 = document.getElementById("hiddenInput2").value;
  countryObject.country = info;
  countryObject.capital = info2;
  arr.push(countryObject);
  console.log(arr);
};

let showCountries = function () {
  let info = "";
  let showCountry = countryObject.country;

  for (i = 0; i < showCountry.length; i++) {
    info += `<p>${showCountry[i]}</p>`;
  }

  const card = document.getElementById("addInfo");

  card.innerHTML = info;
};

let getInfoCapital = function () {
  let info = "";
  let showCapital = countryObject.capital;

  for (i = 0; i < showCapital.length; i++) {
    info += `<p>${showCapital[i]}</p>`;
  }
  const card = document.getElementById("showCapital");

  card.innerHTML = info;
};

let deleteCountry = function() {
  let info = "";
  let deleteInfo = delete countryObject;
}

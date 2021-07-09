let ShowInput = document.getElementById("putInfo");

function inputVisibility(ShowInput) {
  let e = document.getElementById("hiddenItems");
  if (e.style.display == "none") e.style.display = "block";
  else e.style.display = "none";
}

let secondBlockShowInput = document.getElementById("getInfo");

function secondBlockHiddenInputVisibility(secondBlockShowInput) {
  let e = document.getElementById("secondBlockhiddenItems");
  if (e.style.display == "none") e.style.display = "block";
  else e.style.display = "none";
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
    info += `<p>${showCountry[i]}</p>`
  };

  const card = document.getElementById("addInfo");

  card.innerHTML = info;
};

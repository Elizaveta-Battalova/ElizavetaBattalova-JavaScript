const phone = [
  {
    model: "samsung",
    imgUrl: "https://sila.by/img/catalog2015_ico/ntpk/tovar120590_ico.jpg",
    color: "red",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus. Enim soluta qui itaque saepe, maiores doloremque aperiam dolorem a?",
    price: 100,
    sale: true,
  },
  {
    model: "apple",
    imgUrl: "https://sila.by/img/catalog2015_ico/ntpk/tovar115386_ico.jpg",
    color: "red",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus. Enim soluta qui itaque saepe, maiores doloremque aperiam dolorem a?",
    price: 100,
    sale: true,
  },
  {
    model: "nokia",
    imgUrl: "https://sila.by/img/catalog2015_ico/ntpk/tovar108673_ico.jpg",
    color: "red",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus. Enim soluta qui itaque saepe, maiores doloremque aperiam dolorem a?",
    price: 100,
    sale: true,
  },
];

let text = "";

for (let i = 0; i < phone.length; i++) {
  text += `<div class="card" style="width: 18rem;">
    <img src="${phone[i].imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" id="myCard">${phone[i].model}</h5>
      <p class="card-text">${phone[i].color}</p>
      <a href="#" class="btn btn-primary" onclick="showCards()">Go somewhere</a>
    </div>
  </div>`;
}

const card = document.getElementById("myCard");
card.innerHTML = text;

let showCards = function () {
  let info = "";


  for (i = 0; i < phone.length; i++) {
    info += `<p>${phone[i].model}${phone[i].descriptions}</p>`;
  }
  const card = document.getElementById("showCard");

  card.innerHTML = info;
  console.log(info);
};

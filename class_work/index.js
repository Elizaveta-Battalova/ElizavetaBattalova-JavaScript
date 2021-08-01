const form = document.getElementById("form");
const btnAddForm = document.querySelector(".add");
const btnEdit = document.querySelector(".edit");
const listPhones = document.querySelector(".list_phones");

class Phones {
  constructor() {
    this.state = [];
    this.id = 1;
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  getState() {
    return this.state;
  }

  getOneCard(id) {
    let state = this.getState();
    let card = state.filter((elem) => id === elem.id);
    return card[0];
  }

  render() {
    const toCurrency = (price) => {
      return new Intl.NumberFormat("ru-RU", {
        currency: "USD",
        style: "currency",
      }).format(price);
    };

    let cards = "";
    for (let elem of this.state) {
      const { brend, model, color, imgUrl, price, id } = elem;

      cards += `
            <div class="card" style="width: 15rem;">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${brend} ${model}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Цвет: ${color}</li>
                    <li class="list-group-item">Цена: <span class="price_phone">${price}</span></li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link edit_card" data-id="${id}">Редактировать</a>
                    <a href="#" class="card-link delete_card" data-id="${id}">Удалить</a>
                </div>
            </div>
            `;
    }

    listPhones.innerHTML = cards;
    cards = "";
    document.querySelectorAll(".price_phone").forEach((node) => {
      node.textContent = toCurrency(node.textContent);
    });
  }

  add(data) {
    const state = this.getState();
    data.id = this.id;
    this.id++;

    state.push(data);

    this.setState(state);
  }

  update(data) {
    let state = this.getState();
    data.id = parseInt(data.id);
    console.log(state);
    let newState = state.map((elem) => {
      if (data.id === elem.id) {
        return data;
      }
      return elem;
    });

    this.setState(newState);
  }

  delete(id) {
    let state = this.getState();

    state = state.filter((elem) => id !== elem.id);
    this.setState(state);
  }
}

const phones = new Phones();

const onAddPhone = (e) => {
  e.preventDefault();

  let phone = {};

  for (let elem of form) {
    if (elem.tagName === "INPUT") {
      phone[elem.name] = elem.value;
      elem.value = "";
    }
  }

  phones.add(phone);
};

const onActionCard = (e) => {
  if (e.target.classList.contains("delete_card")) {
    const id = e.target.dataset.id;

    phones.delete(parseInt(id));
  }

  if (e.target.classList.contains("edit_card")) {
    const idCard = e.target.dataset.id;

    let card = phones.getOneCard(parseInt(idCard));
    const { brend, model, color, imgUrl, price, id } = card;

    for (let elem of form) {
      if (elem.name === "brend") {
        elem.value = brend;
      }
      if (elem.name === "model") {
        elem.value = model;
      }
      if (elem.name === "color") {
        elem.value = color;
      }
      if (elem.name === "imgUrl") {
        elem.value = imgUrl;
      }
      if (elem.name === "price") {
        elem.value = price;
      }
      if (elem.name === "id") {
        elem.value = id;
      }
    }
    btnAddForm.classList.toggle("hide");
    btnEdit.classList.toggle("hide");
  }
};

const onUpdateCard = (e) => {
  e.preventDefault();

  let phone = {};

  for (let elem of form) {
    if (elem.tagName === "INPUT") {
      phone[elem.name] = elem.value;
      elem.value = "";
    }
  }

  btnAddForm.classList.toggle("hide");
  btnEdit.classList.toggle("hide");

  phones.update(phone);
};

form.addEventListener("submit", onAddPhone);
listPhones.addEventListener("click", onActionCard);
btnEdit.addEventListener("click", onUpdateCard);

let name = prompt("Введите ваше ФИО");
let age = GetAge();
let gender = confirm("Ваш пол - мужской?");
let genderMessage = GetGenderMessage();
let pensionMessage = GetPensionMessage();

alert(
  `Ваше имя: ${name}\nВаш возраст: ${age}\nВаш пол: ${genderMessage}\nВы на пенсии: ${pensionMessage}`
);

function GetAge() {
  let age = prompt("Введите ваш возраст");
  while (!parseInt(age)) {
    alert("Нужно писать число!");
    age = prompt("Введите ваш возраст");
  }

  return age;
}

function GetPensionMessage() {
  if ((age >= 65 && gender) || (age >= 60 && !gender)) {
    return "Да.";
  }

  return "Нет.";
}

function GetGenderMessage() {
  if (gender) {
    return "мужской";
  } else {
    return "женский";
  }
}

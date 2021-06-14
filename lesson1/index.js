let name = prompt("Введите ваше ФИО");
let age = prompt("Введите ваш возраст");
let gender = confirm("Ваш пол - мужской?");

let genderMessage = GetGenderMessage();

alert(`Ваше имя: ${name}\nВаш возраст: ${age}\nВаш пол: ${genderMessage}` );


function GetGenderMessage() {
    if(gender)
    {
         return "мужской";
    }
    else
    {
        return "женский";
    }
  }
let name = prompt("Введите ваше ФИО");

let age = prompt ("Введите ваш возраст");
while ( !parseInt(age) ) {
    alert ('Нужно писать число!');
    age = prompt ("Введите ваш возраст");
} 

let gender = confirm("Ваш пол - мужской?");

let genderMessage = GetGenderMessage();

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

  alert(`Ваше имя: ${name}\nВаш возраст: ${age}\nВаш пол: ${genderMessage}` );
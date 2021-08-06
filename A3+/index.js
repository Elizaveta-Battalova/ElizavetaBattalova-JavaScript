let isPalindrome = function (string) {
let stringResult = string.trim().split(' ').join('').toLowerCase();
alert(stringResult === stringResult.split('').reverse().join('') ? `Палиндром` : `Не палиндром`);
}

document.getElementById("btn").onclick = function () {
  isPalindrome(document.getElementById("txt").value);
};

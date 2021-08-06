let isPalindrome = function (string) {
let stringResult = string.toLowerCase().split(" ").join("");
let str = string.toLowerCase().split(" ").reverse().join("")
  if (stringResult == str) {
    alert(string + " палиндорм !");
  } else {
    alert(string + " не палиндорм !");
  }
};

document.getElementById("btn").onclick = function () {
  isPalindrome(document.getElementById("txt").value);
};

let isPalindrome = function (string) {
  if (string == string.split("").reverse().join("")) {
    alert(string + " палиндорм !");
  } else {
    alert(string + " не палиндорм !");
  }
};

document.getElementById("btn").onclick = function () {
  isPalindrome(document.getElementById("txt").value);
};

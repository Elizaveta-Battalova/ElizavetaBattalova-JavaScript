let isPalindrome = function(string) {
  let strLength = string.length;
  if (strLength < 2) return alert("Палиндорм ! :) ");
  if (string[0] === string[strLength - 1]) {
    return isPalindrome(string.slice(1, strLength - 1));
  }
  return alert(" Не палиндорм :(");
};
document.getElementById("btn").onclick = function() {
  isPalindrome(document.getElementById("txt").value);
};


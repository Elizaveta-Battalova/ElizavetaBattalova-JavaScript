function reverse(str) {
    return alert(str.split("").reverse().join(""));
}
  
  document.getElementById("btn").onclick = function () {
    reverse(document.getElementById("txt").value);
  };
  




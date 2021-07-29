function getCentury(year) {
  return alert(Math.floor((year - 1) / 100) + 1 + " век"); 
}

document.getElementById("btn").onclick = function () {
    getCentury(document.getElementById("txt").value);
};

function dectobin(k) {
  let result = "";
  let bin = 2;
  while (k >= bin) {
    result = String(k % bin) + result;
    k = (k - (k % bin)) / bin;
  }
  result = String(k) + result;
  return result;
}

k = +prompt("Son kiriting:");
console.log("Berilgan son: " + k);
console.log("Berilgan sonnig ikkilikdagi ko'rinishi: " + dectobin(k));

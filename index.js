let string = `
int *k;  // sumup * in K
`;

function convertCode(code) {
  let arr = code.split(";");
  for (let st in arr) {
    if (!arr[st].trim().startsWith("//")) {
      let arrStr = arr[st].split("");

      for (let i in arrStr) {
        if (arrStr[i] === "*") {
          arrStr[i] = "->";
        }
      }
      arr[st] = arrStr.join("");
    }
  }
  console.log(arr.join(";"));
}
convertCode(string);

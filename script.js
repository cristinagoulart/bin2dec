
function updateBinary(binary) {
  if (binary === "") {
    document.getElementById("outputConverted").value = "";
    return;
  }

  if (!validateBinary(binary)) {
    addClassInvalid();
    return;
  }

  removeClassInvalid();
  document.getElementById("outputConverted").value = convertBinaryToDecimal(binary);
}

function validateBinary(binary) {
  const parseBinary = parseInt(binary, 10);
  let isABinNumber = /^[01]+$/.test(parseBinary);
  return isABinNumber
}


function addClassInvalid() {
  let element = document.getElementById("inputBinary");
  element.classList.add("is-invalid");
}


function removeClassInvalid() {
  let element = document.getElementById("inputBinary");
  element.classList.remove("is-invalid");
}

function convertBinaryToDecimal(binaryValue) {
  let decimal = 0;
  const length = binaryValue.length - 1
  for (let i = 0; i <= length; i++) {
    let exponentialParse = Math.pow(2, (length - i));
    decimal += binaryValue[i] * exponentialParse;
  }
  return decimal
}
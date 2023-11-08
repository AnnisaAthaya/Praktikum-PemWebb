//Annisa Athaya-RB

const hitungGanjilGenap = () => {
  let inputNumber = document.querySelector("#inputNumber").value;
  let ganjil = 0;
  let genap = 0;

  if (inputNumber === "" || isNaN(inputNumber)) {
    alert(`Angka Saja`);
  }
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 2 === 0) {
      genap++;
    } else {
      ganjil++;
    }
  }
  document.querySelector("#bilanganGanjil").textContent = ganjil;
  document.querySelector("#bilanganGenap").textContent = genap;
};

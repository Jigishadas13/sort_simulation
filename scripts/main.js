"use strict";
const start = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);
  
  let orderValue= Number(document.querySelector(".order-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }
  if (algoValue === 0) {
    alert("No Algorithm Selected");
    return;
  }

  if(orderValue ===0){
    alert("No Order Selected");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if (algoValue === 1 && orderValue === 1) await algorithm.SelectionSort1();
  if (algoValue === 1 && orderValue === 2) await algorithm.SelectionSort2();

  if (algoValue === 2 && orderValue === 1) await algorithm.BubbleSort1();
  if (algoValue === 2 && orderValue === 2) await algorithm.BubbleSort2();

  if (algoValue === 3 && orderValue === 1) await algorithm.InsertionSort1();
  if (algoValue === 3 && orderValue === 2) await algorithm.InsertionSort2();

  if (algoValue === 4 && orderValue === 1) await algorithm.MergeSort1();
  if (algoValue === 4 && orderValue === 2) await algorithm.MergeSort2();

  if (algoValue === 5 && orderValue === 1) await algorithm.QuickSort1();
  if (algoValue === 5 && orderValue === 2) await algorithm.QuickSort2();
};

const RenderScreen = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  console.log(arrayNode);
  console.log(list);
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const RenderArray = async (sorted) => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  if (sorted) list.sort((a, b) => a - b);

  const arrayNode = document.querySelector(".array");
  const divnode = document.createElement("div");
  divnode.className = "s-array";

  for (const element of list) {
    const dnode = document.createElement("div");
    dnode.className = "s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
  arrayNode.appendChild(divnode);
};

const randomList = async (Length) => {
  let list = new Array();
  let lowerBound = 1;
  let upperBound = 100;

  for (let counter = 0; counter < Length; ++counter) {
    let randomNumber = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    list.push(parseInt(randomNumber));
  }
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};

const response = () => {
  let Navbar = document.querySelector(".navbar");
  if (Navbar.className === "navbar") {
    Navbar.className += " responsive";
  } else {
    Navbar.className = "navbar";
  }
};

document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload=RenderScreen;

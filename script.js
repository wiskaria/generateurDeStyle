const box = document.querySelector(".box");
const codeContainer = document.querySelector(".code");

const handleWidth = (value) => {
  console.log(`value : ${value} type : ${typeof parseInt(value)}`);
  if (value <= 600) {
    box.style.width = `${value}px`;
  } else {
    document.getElementsByName("width")[0].value = "";
    alert("L'élément ne doit pas dépasser 600 pixels de large");
  }
};

const handleHeight = (value) => {
  console.log(`value : ${value} type : ${typeof parseInt(value)} `);
  if (value < window.innerHeight) {
    box.style.height = `${value}px`;
  } else {
    alert("L'élément dépasse la taille de la fenêtre");
  }
};

// Fonction qui s'occupe de la couleur de l'élément
const handleColor = (value) => {
  console.log(`value : ${value} type : ${typeof value}`);
  box.style.backgroundColor = `${value}`;
};

// Fonction qui permet d'arrondir les bords de l'élément
const handleBorderRadius = (value) => {
  console.log(`value : ${value} type : ${typeof value}`);
  box.style.borderRadius = `${value}px`;
};
const handleBorder = (value) => {
  console.log(`value : ${value} type : ${typeof value}`);
  box.style.border = `${value}px solid black`;
};

const code = document.querySelector(".code");

const generateCode = () => {
  if ((codeContainer.innerHTML = ""))
    return alert("il faut au moins un caractère");
  code.style.border = "solid 1px #E9D5DA";

  codeContainer.innerHTML = "";

  if (box.style.width !== "") {
    codeContainer.innerHTML += `<p>width : ${box.style.width}; </p>`;
  }
  if (box.style.height !== "") {
    codeContainer.innerHTML += `<p>height : ${box.style.height}; </p>`;
  }
  if (box.style.backgroundColor !== "") {
    codeContainer.innerHTML += `<p>background-color : ${box.style.backgroundColor}; </p>`;
  }

  if (box.style.borderRadius !== "") {
    codeContainer.innerHTML += `<p>border-radius : ${box.style.borderRadius}; </p>`;
  }
  if (box.style.border !== "") {
    codeContainer.innerHTML += `<p>border : ${box.style.border}; </p>`;
  }
};

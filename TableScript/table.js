let emptyArray;

const array = [
  {
    id: 479,
    name: "Bomba Altri 1,5cv 220v Mono - 4AT4/10",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "1018.27",
    descri: "Conjunto com bombeador 4AT4/10",
    isActive: 0,
    createdAt: "2021-12-31T12:22:09.000Z",
  },
  {
    id: 369,
    name: "Bomba Altri 1,5hp 220v - 4AT6/08",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "1500.84",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:33:08.000Z",
  },
  {
    id: 24,
    name: "Bomba Altri 1,0hp 220v 3Fios - 4AT3/08",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "998.294",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:36:47.000Z",
  },
  {
    id: 147,
    name: "Bomba Altri 1,5hp 220v 3fios - 4AT3/08",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "1102.948",
    descri: "Conjunto",
    isActive: 0,
    createdAt: "2021-12-31T12:41:09.000Z",
  },
  {
    id: 423,
    name: "Bomba Altri 0,75hp 220v 3fios - 4AT3/03",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "894.839",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:49:04.000Z",
  },
  {
    id: 427,
    name: "Bomba Altri 0,33 220v 2fios - 3AT2/06",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "461.428",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:50:29.000Z",
  },
  {
    id: 423,
    name: "Bomba Altri 1,0cv 220v 3 fios - 4AT4/07",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "1000.549",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:52:31.000Z",
  },
  {
    id: 497,
    name: "Bomba Altri 1,0cv 380v / 4AT4-07",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "1000.549",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:54:43.000Z",
  },
  {
    id: 41,
    name: "Bomba Altri 1.5cv 380v - 4AT4/09",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "1156.738",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:56:25.000Z",
  },
  {
    id: 42,
    name: "Bomba Claw 1,0hp 220v - W3SDM118",
    ncm: "84137010",
    categ: "Bombas",
    unit: "Uni",
    preco: "952.05",
    descri: "Conjunto",
    isActive: 1,
    createdAt: "2021-12-31T12:59:17.000Z",
  },
];

const prodtable = createTable(
  array,
  ["Nome", "name"],
  ["NCM", "ncm"],
  ["Categ", "categ"],
  ["Preço", "preco"]
  //['Unidade', 'unit']
);

prodtable.classList.add("table", "is-striped", "is-hoverable", "is-fullwidth");

function createTable(result) {
  if (result) {
    const table = document.createElement("table");
    const elthead = document.createElement("thead");
    const eltbody = document.createElement("tbody");
    const eltfoot = document.createElement("tfoot");

    // Criar Cabeçario da Tabela
    let currentLine = document.createElement("tr");
    let lineFoot = document.createElement(`tr`);

    for (i = 1; i < arguments.length; i++) {
      // Cria Thead
      let currentCell = document.createElement("th");
      let currentText = document.createTextNode(arguments[i][0]);
      currentCell.appendChild(currentText);
      currentLine.appendChild(currentCell);

      // Cria Tfoot
      let currentText2 = document.createTextNode(arguments[i][0]);
      let currentCell2 = document.createElement("th");
      currentCell2.appendChild(currentText2);
      lineFoot.appendChild(currentCell2);
    }

    // Add HEAD
    elthead.appendChild(currentLine);
    eltfoot.appendChild(lineFoot);

    for (a = 0; a < array.length; a++) {
      //Criando Linhas
      currentLine = document.createElement("tr");
      currentLine.setAttribute("id", "id" + array[a]["id"]);

      //Criando Celulas
      for (i = 1; i < arguments.length; i++) {
        currentCell = document.createElement("td");
        let currentIdentify = arguments[i][1];
        let text = array[a][currentIdentify];

        if (arguments[i][1] === "preco") {
          text = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(text);
        }

        currentText = document.createTextNode(text);
        currentCell.appendChild(currentText);
        currentLine.appendChild(currentCell);
      }

      eltbody.appendChild(currentLine);
    }

    table.appendChild(eltbody);
    table.appendChild(elthead);
    table.appendChild(eltfoot);
    return table;
  } else {
    let currentLine = document.createElement("p");
    let text = document.createTextNode("Ainda não há nenhum valor!");
    currentLine.appendChild(text);
    currentLine.classList.add("error");
    return currentLine;
  }
}

const div = document.querySelector(".function-table");

div.appendChild(prodtable);

let linhas = prodtable.querySelectorAll("tr");
for (i = 0; i < linhas.length - 1; i++) {
  let currentID = linhas[i].id;
  let currentLine = document.querySelector(`tr[id="${currentID}"]`);
  currentLine.classList.add("zoom");
  if (array[i]["isActive"] === 0) {
    currentLine.classList.add("red");
    currentLine.setAttribute("title", "O elemento está fora de Estoque");
  }
}

console.log(emptyArray);

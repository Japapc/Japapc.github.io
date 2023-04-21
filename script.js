const catalog = [
  {
    nome: "Peça 1",
    descricao: "Descrição da Peça 3",
    grupo: "Carro",
    localizacao: "333",
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Peça 1",
    descricao: "Descrição da Peça 3",
    grupo: "Carro",
    localizacao: "333",
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Peça 1",
    descricao: "Descrição da Peça 3",
    grupo: "Carro",
    localizacao: "21A11C02",
    imagem: "./images/rolamento.jpg",
  },

];

const tableBody = document.getElementById("table-body");
const navLinks = document.querySelectorAll("nav a");

function updateTable(grupo) {
  tableBody.innerHTML = "";
  catalog.forEach((peca) => {
    if (peca.grupo === grupo) {
      const row = `
        <tr>
          <td>${peca.nome}</td>
          <td>${peca.descricao}</td>
          <td>${peca.grupo}</td>
          <td>${peca.localizacao}</td>
          <td><img src="${peca.imagem}" alt="Imagem da peça ${peca.nome}" height="150" width="150"></td>
        </tr>
      `;
      tableBody.innerHTML += row;
    }
  });
}

updateTable("Carro"); // exibir as peças de carro por padrão

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    updateTable(link.innerText);
  });
});

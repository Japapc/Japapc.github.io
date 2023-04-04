const catalog = [
  {
    nome: "Peça 1",
    descricao: "Descrição da Peça 1",
    localizacao: "Carro",
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Peça 2",
    descricao: "Descrição da Peça 2",
    localizacao: "Trator",
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Peça 3",
    descricao: "Descrição da Peça 3",
    localizacao: "Carro",
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Peça 4",
    descricao: "Descrição da Peça 4",
    localizacao: "Trator",
    imagem: "https://via.placeholder.com/150",
  },
];

const tableBody = document.getElementById("table-body");
const navLinks = document.querySelectorAll("nav a");

function updateTable(localizacao) {
  tableBody.innerHTML = "";
  catalog.forEach((peca) => {
    if (peca.localizacao === localizacao) {
      const row = `
        <tr>
          <td>${peca.nome}</td>
          <td>${peca.descricao}</td>
          <td>${peca.localizacao}</td>
          <td><img src="${peca.imagem}" alt="Imagem da peça ${peca.nome}"></td>
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

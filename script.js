let carros = JSON.parse(localStorage.getItem("carros")) || [];

function salvar() {
  localStorage.setItem("carros", JSON.stringify(carros));
}

function adicionarCarro() {
  let cliente = document.getElementById("cliente").value;
  let servico = document.getElementById("servico").value;

  if (cliente === "" || servico === "") {
    alert("Preencha todos os campos!");
    return;
  }

  let carro = {
    cliente: cliente,
    servico: servico
  };

  carros.push(carro);

  salvar();
  atualizarLista();

  document.getElementById("cliente").value = "";
  document.getElementById("servico").value = "";
}

function removerCarro(index) {
  carros.splice(index, 1);
  salvar();
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  carros.forEach((carro, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${carro.cliente} - ${carro.servico}
      <button onclick="removerCarro(${index})">Concluído</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById("total").innerText = carros.length;
}

atualizarLista();
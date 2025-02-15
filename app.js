const amigos = [];
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.getElementById('resultado');
const amigo = document.querySelector('#amigo');
const btnAdd = document.querySelector(".button-add");
const btnSort = document.querySelector(".button-draw");

const adicionarAmigo = () => {
  const valor = amigo.value;

  if(valor.trim() !== "") {
    amigos.push(valor);
    const arrayAmigos = amigos.map((item, index) => `<li class="amigo" key=${index}>${item}</li>`).join('');
    listaAmigos.innerHTML = arrayAmigos;

    alert(`Seu amigo ${valor} adicionado com sucesso`);
    amigo.value = "";
  }
}

function sortearAmigo() {
  const index = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[index];
  resultado.innerHTML = `<li class="amigo_sorteado">O amigo(a) sorteado foi ${amigoSorteado}</li>`;
}

btnAdd.addEventListener("click", adicionarAmigo);
btnSort.addEventListener("click", sortearAmigo);

btnAdd.addEventListener("click", adicionarAmigo);
btnSort.addEventListener("click", sortearAmigo);
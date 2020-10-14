// Create map
const map = L.map("mapid").setView([-28.677989, -49.3789228], 16);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remover icon
  marker && map.removeLayer(marker);

  // Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add campo de fotos
function addPhotoField() {
  // Pegar o container de fotos
  const container = document.querySelector("#images");

  // Pegar o container para duplicar #new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //Verificando se o campo está vazio
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // Limpar o container antes de adicionar ao container de imagens
  input.value = "";

  // Adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event){
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2){
    // Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // Deletar o campo
  span.parentNode.remove();
}

// Troca do sim e não

function toggleSelect(event) {
  // Retirar a classe .active dos botões
  document.querySelectorAll('.button-select button').forEach((button) => {
    button.classList.remove('active')
  });

  // Colocar a classe .active no botão clicado
  const button = event.currentTarget
  button.classList.add('active');

  // Atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  // Verifcar se é sim ou não
  input.value = button.dataset.value;

}

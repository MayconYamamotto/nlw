// Create map

const map = L.map('mapid').setView([-28.4679426, -48.9808053], 16);

// Create and add tilelayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;



// Create and add maker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remover 
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

// Adicionar o campo de fotos
function addPhotoField() {
    // Pegar o container de fotos #imagens
    const container = document.querySelector('#images')

    // Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return ""
    }

    // Limpar o campo antes de adicionar o clone container  
    input.value = ""

    // adicionar o clone ao container de #imagens 
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove();

}

// seleção do Sim e Não
function toggleSelect(event) {

    // Retirar a class .active (Dos 2 botões)
    document.querySelectorAll('.button-select button')
            .forEach(function (button) {
            button.classList.remove('active')
        })

    // Colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    // Verificar se é sim ou não
    

    // Pegar o botão clicado

    // Retirar a class .active (Dos 2 botões)

    // Colocar a class .active

}



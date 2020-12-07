// Options
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// Create map

const map = L.map('mapid', options).setView([-28.4679426, -48.9808053], 16);

// Create and add tilelayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "/assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add maker
L
    .marker([-28.4679426, -48.9808053], { icon })
    .addTo(map)

/* img gallery */
function selectImage(event) {
    const button = event.currentTarget;

    // Remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(/* (removeActiveClass) */(button) => { /* (removeActiveClass) { func... }*/
        button.classList.remove("active")
    })
    /*     
        function removeActiveClass(button) {
    
        } 
    */

    // Selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container de image
    imageContainer.src = image.src

    // Adicionar a classe .active para este botão
    button.classList.add("active")

}



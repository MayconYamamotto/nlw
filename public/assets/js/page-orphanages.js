// Create map
const map = L.map('mapid').setView([-28.4679426, -48.9808053], 16);

// Create and add tilelayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({ id, name, lat, lng }) {
    // const popup overlay 
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240,
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/assets/images/arrow-white.svg"> </a>`)

    // Create and add maker
    L
        .marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
}

const orphanages = document.querySelectorAll('.orphanages span')

orphanages.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})
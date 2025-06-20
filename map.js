window.renderMap = (lat, lon) => {
  const map = L.map('map').setView([lat, lon], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
  L.marker([lat, lon]).addTo(map)
    .bindPopup('You are here')
    .openPopup();
};

function generateMap(){
    // document.getElementById('s-map').innerHTML = "<div id='map' style='width: 100%; height: 100%;z-index:1;'></div>";
    // const mymap = L.map('map').setView([46, 25], 6);
    // const attribution =
    //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const tiles = L.tileLayer(tileUrl, { attribution });
    // tiles.addTo(mymap);
    // L.addTo(mymap);
    
    // document.getElementById('s-map').innerHTML = "<div id='map' style='width: 100%; height: 100%;z-index:1;'></div>";

    var map = L.map('map').setView([44.427549, 26.1255168], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
 
    L.marker([44.427549, 26.1255168]).addTo(map)
        .bindPopup('<b>Capriday </b>')
        .openPopup();
    
}
generateMap();
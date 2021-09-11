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

    var map = L.map('map').setView([44.17069, 28.57692], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([44.17069, 28.57692]).addTo(map)
        .bindPopup('<b>ANCC Caprirom </b><br>I.C. Bratianu, nr 248, Constanta')
        .openPopup();
    
}
generateMap();
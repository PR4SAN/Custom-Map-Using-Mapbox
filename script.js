// mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtc29qaGEiLCJhIjoiY2o2eXVrdmM0MDh5YjJ4bWwxZDJvcW1leSJ9.ovIpPrBVrG2R5sY-4tJ80Q';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v10',
// center: [-74.50, 40], 
// zoom: 9 
// });
// map.addControl(new mapboxgl.NavigationControl());
// var layerList = document.getElementById('menu');
// var inputs = layerList.getElementsByTagName('input');

// function switchLayer(layer) {
//     var layerId = layer.target.id;
//     map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
// }

// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].onclick = switchLayer;
// }


mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtc29qaGEiLCJhIjoiY2o2eXVrdmM0MDh5YjJ4bWwxZDJvcW1leSJ9.ovIpPrBVrG2R5sY-4tJ80Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 13,
    center: [-74.50, 40],
    zoom: 10 
});

map.addControl(new mapboxgl.NavigationControl());

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('a');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
$(document).ready(function(){
    $('a').click(function(){
      $('a').removeClass("active");
      $(this).addClass("active");
  });
  });
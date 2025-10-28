mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlcnlkYXZpcyIsImEiOiJjbWg5cmp2cGswcjViMm5vbzB0b2p3OGh6In0.4ZRnBeMTyJr9Aed0xQ04xw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/averydavis/cmh9rqtvv00qi01r54itfb3lj', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });
var mymap = L.map('mapid').setView([38.6270, -90.23], 12);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
  minZoom: 11,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Hon's Wok
var honsWok = L.icon({
    iconUrl: 'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/ikvcf79oniteqad7hsfp',
    iconSize: [45, 40], // size of the icon
});
var marker1 = L.marker([38.638813349828524, -90.2587455891833], {icon: honsWok}).addTo(mymap);
marker1.bindPopup("<b>Hon's Wok</b><br>4489 Forest Park Ave, St. Louis, MO 63108");

// SawMill BBQ
var sawMill = L.icon({
    iconUrl: 'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/dxx4lstfogtov3t2uubf',
    iconSize: [45, 40], // size of the icon
});
var marker2 = L.marker([38.573274870999825, -90.18691517117348], {icon: sawMill}).addTo(mymap);
marker2.bindPopup("<b>Sawmill BBQ</b><br>4060 Mississippi Ave, Cahokia, IL 62206");

// Southern
var Southern = L.icon({
    iconUrl: 'https://static.wixstatic.com/media/41e341_adfd2522cb0848b0b1fd055f8f391dd5~mv2.png/v1/fill/w_500,h_272,al_c,q_85,usm_0.66_1.00_0.01/Southern_Knife%20Rack_transparent.webp',
    iconSize: [45, 40], // size of the icon
});
var marker3 = L.marker([38.635287700290334, -90.22424957040396], {icon: Southern}).addTo(mymap);
marker3.bindPopup("<b>Southern</b><br>3108 Olive St, St. Louis, MO 63103");

// Sameem
var Sameem = L.icon({
    iconUrl: 'https://www.sameems.com/uploads/b/f7a4c930-d023-11ea-ad5a-5f3fef2343a3/d6a33ce3ed77478a80eda2bf33f0b4ca.jpeg',
    iconSize: [45, 40], // size of the icon
});
var marker4 = L.marker([38.62707640433827, -90.25844995952892], {icon: Sameem}).addTo(mymap);
marker4.bindPopup("<b>Sameem Afghan Restaurant & Catering</b><br>4341 Manchester Ave, St. Louis, MO 63110");

//Hodak's
var Hodaks = L.icon({
    iconUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/34645997_2174689605891487_5750195506869436416_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Th24Ukbn_vQAX8jvvEj&_nc_ht=scontent-ort2-2.xx&oh=00_AT_6IsoE-R2XUy7zO7pgHnTYjYs1bntw2e25dAhKQnDZEg&oe=6214E138',
    iconSize: [45, 40], // size of the icon
});
var marker5 = L.marker([38.60670940811817, -90.21819991535106], {icon: Hodaks}).addTo(mymap);
marker5.bindPopup("<b>Hodak's Restaurant & Bar</b><br>2100 Gravois Ave, St. Louis, MO 63104<br>");

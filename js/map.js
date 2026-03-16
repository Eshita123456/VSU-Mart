/* ==============================================
MAP
=============================================== */

var locations = [[
'<div class="infobox"><h3 class="title">VSU MART OFFICE</h3><span>Indirapuram Ghaziabad</span><span>+91 8860107080</span></div>',
28.6384,
77.3693,
2
]];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    center: new google.maps.LatLng(28.6384, 77.3693),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();
var marker, i;

for (i = 0; i < locations.length; i++) {

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/gps.png'
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

}
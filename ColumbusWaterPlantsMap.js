
function initializeMap(zoomLevel) {
	var DRWP_TITLE = "DRWP - The Dublin Road Water Plant utilizes surface water from the Griggs and O'Shaughnessy Reservoirs on the Scioto River and serves downtown Columbus, western, and southwestern Franklin County.";
	var DRWP_URL = 'https://drive.google.com/file/d/0B5uB9Fw1I1W_MjYyOGlBWUNNTDQ/view?usp=sharing';
	var PAWP_TITLE = "DRWP - The Dublin Road Water Plant utilizes surface water from the Griggs and O'Shaughnessy Reservoirs on the Scioto River and serves downtown Columbus, western, and southwestern Franklin County.";
	var PAWP_URL = 'https://drive.google.com/open?id=0B5uB9Fw1I1W_NjdFX2l6SnBucVE';
	var HCWP_TITLE = "HCWP - The Hap Cremean Water Plant (HCWP; the upper area) utilizes surface water from the Hoover Reservoir on Big Walnut Creek and serves OSU and the northern half of Franklin County.";
	var HCWP_URL = 'https://drive.google.com/file/d/0B5uB9Fw1I1W_cXlVbWNKemQ0MHc/view?usp=sharing';

	var mapOptions = {
		center : {
			lat : 39.9829515,
			lng : -82.990829
		},
		zoom : zoomLevel
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

	// Dublin Road Water Plant
	var drwpLatlng = new google.maps.LatLng(39.970371, -83.034791);
	var drwpMarker = new google.maps.Marker({
			position : drwpLatlng,
			map : map,
			title : DRWP_TITLE
		});

	var drwpCoordinates = [
		new google.maps.LatLng(40.043436, -83.200177),
		new google.maps.LatLng(40.068131, -83.107172),
		new google.maps.LatLng(40.054004, -83.097683),
		new google.maps.LatLng(40.022091, -83.094562),
		new google.maps.LatLng(40.021443, -83.060064),
		new google.maps.LatLng(39.990881, -83.060203),
		new google.maps.LatLng(39.989779, -82.985564),
		new google.maps.LatLng(39.964259, -82.983104),
		new google.maps.LatLng(39.960064, -83.018940),
		new google.maps.LatLng(39.938394, -83.003806),
		new google.maps.LatLng(39.823098, -83.007137),
		new google.maps.LatLng(39.834182, -83.098548),
		new google.maps.LatLng(39.917173, -83.183196)
	];

	var drwpPolygon = new google.maps.Polygon({
			paths : drwpCoordinates,
			strokeColor : '#FF0000',
			strokeOpacity : 0.8,
			strokeWeight : 2,
			fillColor : '#FF0000',
			fillOpacity : 0.35
		});

	google.maps.event.addListener(drwpPolygon, 'click', function (event) {
		window.location.href = DRWP_URL;
	});
	google.maps.event.addListener(drwpPolygon, 'mouseover', function (event) {
		drwpPolygon.setOptions({
			fillColor : '#FF5555'
		});
	});
	google.maps.event.addListener(drwpPolygon, 'mouseout', function (event) {
		drwpPolygon.setOptions({
			fillColor : '#FF0000'
		});
	});
	drwpPolygon.setMap(map);

	// Parsons Avenue Water Plant
	var pawpLatlng = new google.maps.LatLng(39.848699, -82.990439);
	var pawpMarker = new google.maps.Marker({
			position : pawpLatlng,
			map : map,
			title : PAWP_TITLE
		});

	var pawpCoordinates = [
		new google.maps.LatLng(39.960064, -83.018940),
		new google.maps.LatLng(39.964259, -82.983104),
		new google.maps.LatLng(39.954576, -82.982303),
		new google.maps.LatLng(39.952181, -82.945103),
		new google.maps.LatLng(39.932325, -82.931523),
		new google.maps.LatLng(39.936917, -82.873406),
		new google.maps.LatLng(39.931175, -82.752207),
		new google.maps.LatLng(39.823248, -82.763504),
		new google.maps.LatLng(39.823098, -83.007137),
		new google.maps.LatLng(39.938394, -83.003806)
	];

	var pawpPolygon = new google.maps.Polygon({
			paths : pawpCoordinates,
			strokeColor : '#00FF00',
			strokeOpacity : 0.8,
			strokeWeight : 2,
			fillColor : '#00FF00',
			fillOpacity : 0.35
		});

	google.maps.event.addListener(pawpPolygon, 'click', function (event) {
		window.location.href = PAWP_URL;
	});
	google.maps.event.addListener(pawpPolygon, 'mouseover', function (event) {
		pawpPolygon.setOptions({
			fillColor : '#55FF55'
		});
	});
	google.maps.event.addListener(pawpPolygon, 'mouseout', function (event) {
		pawpPolygon.setOptions({
			fillColor : '#00FF00'
		});
	});
	pawpPolygon.setMap(map);

	// Hap Cremean Water Plant
	var hcwpLatlng = new google.maps.LatLng(40.056874, -82.890695);
	var hcwpMarker = new google.maps.Marker({
			position : hcwpLatlng,
			map : map,
			title : HCWP_TITLE
		});

	var hcwpCoordinates = [
		new google.maps.LatLng(40.043436, -83.200177),
		new google.maps.LatLng(40.068131, -83.107172),
		new google.maps.LatLng(40.054004, -83.097683),
		new google.maps.LatLng(40.022091, -83.094562),
		new google.maps.LatLng(40.021443, -83.060064),
		new google.maps.LatLng(39.990881, -83.060203),
		new google.maps.LatLng(39.989779, -82.985564),
		new google.maps.LatLng(39.964259, -82.983104),
		new google.maps.LatLng(39.954576, -82.982303),
		new google.maps.LatLng(39.952181, -82.945103),
		new google.maps.LatLng(39.932325, -82.931523),
		new google.maps.LatLng(39.936917, -82.873406),
		new google.maps.LatLng(39.931175, -82.752207),
		new google.maps.LatLng(40.119808, -82.765452),
		new google.maps.LatLng(40.186862, -82.965323),
		new google.maps.LatLng(40.176471, -83.188877),

	];

	var hcwpPolygon = new google.maps.Polygon({
			paths : hcwpCoordinates,
			strokeColor : '#0000FF',
			strokeOpacity : 0.8,
			strokeWeight : 2,
			fillColor : '#0000FF',
			fillOpacity : 0.35
		});

	google.maps.event.addListener(hcwpPolygon, 'click', function (event) {
		window.location.href = HCWP_URL;
	});
	google.maps.event.addListener(hcwpPolygon, 'mouseover', function (event) {
		hcwpPolygon.setOptions({
			fillColor : '#5555FF'
		});
	});
	google.maps.event.addListener(hcwpPolygon, 'mouseout', function (event) {
		hcwpPolygon.setOptions({
			fillColor : '#0000FF'
		});
	});
	hcwpPolygon.setMap(map);
};


var ColumbusWaterPlantsMap = {
	DRWP_TITLE : "DRWP - The Dublin Road Water Plant utilizes surface water from the Griggs and O'Shaughnessy Reservoirs on the Scioto River and serves downtown Columbus, western, and southwestern Franklin County.",
	DRWP_URL : 'https://drive.google.com/file/d/0B5uB9Fw1I1W_MjYyOGlBWUNNTDQ/view?usp=sharing',
	PAWP_TITLE : "PAWP - The Parsons Avenue Water Plant utilizes groundwater from wells and serves south-eastern Franklin County.",
	PAWP_URL : 'https://drive.google.com/open?id=0B5uB9Fw1I1W_NjdFX2l6SnBucVE',
	HCWP_TITLE : "HCWP - The Hap Cremean Water Plant (HCWP; the upper area) utilizes surface water from the Hoover Reservoir on Big Walnut Creek and serves OSU and the northern half of Franklin County.",
	HCWP_URL : 'https://drive.google.com/file/d/0B5uB9Fw1I1W_cXlVbWNKemQ0MHc/view?usp=sharing',
	
	initializeMap : function(zoomLevel) {
		var map = ColumbusWaterPlantsMap.createColumbusMap(zoomLevel);
		
		ColumbusWaterPlantsMap.addDublinRoadWaterPlantToMap(map);
		ColumbusWaterPlantsMap.addParsonsAvenueWaterPlantToMap(map);
		ColumbusWaterPlantsMap.addHapCremeanWaterPlantToMap(map);
	},
	
    createColumbusMap : function(zoomLevel) {
		var mapOptions = {
			center : {
				lat : 39.9829515,
				lng : -82.990829
			},
			zoom : zoomLevel
		};

		return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	},
	
	setWaterPlantMarker: function(map, coordinate, title) {
		var marker = new google.maps.Marker({
			position : coordinate,
			map : map,
			title : title
		});
	},
	
	setWaterPlantArea: function(map, params) {
		var polygon = new google.maps.Polygon({
			paths : params.coordinates,
			strokeColor : params.mainColor,
			strokeOpacity : 0.8,
			strokeWeight : 2,
			fillColor : params.mainColor,
			fillOpacity : 0.35
		});

		ColumbusWaterPlantsMap.setMouseEvents(polygon, params);
		polygon.setMap(map);
	},
	
	setMouseEvents: function(polygon, params) {
		google.maps.event.addListener(polygon, 'click', function (event) {
			window.location.href = params.url;
		});
		
		google.maps.event.addListener(polygon, 'mouseover', function (event) {
			polygon.setOptions({
				fillColor : params.fadedColor
			});
		});
		
		google.maps.event.addListener(polygon, 'mouseout', function (event) {
			polygon.setOptions({
				fillColor : params.mainColor
			});
		});
	},
	
	addDublinRoadWaterPlantToMap: function(map) {
		var params = {
			coordinates : [
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
			],
			mainColor : '#FF0000',
			fadedColor : '#FF5555',
			url : ColumbusWaterPlantsMap.DRWP_URL
		};
		
		ColumbusWaterPlantsMap.setWaterPlantMarker(map, new google.maps.LatLng(39.970371, -83.034791), ColumbusWaterPlantsMap.DRWP_TITLE);
		ColumbusWaterPlantsMap.setWaterPlantArea(map, params);
	},
	
	addParsonsAvenueWaterPlantToMap: function(map) {
		var params = {
			coordinates : [
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
			 ],
			mainColor : '#00FF00',
			fadedColor : '#55FF55',
			url : ColumbusWaterPlantsMap.PAWP_URL
		};
		
		ColumbusWaterPlantsMap.setWaterPlantMarker(map, new google.maps.LatLng(39.848699, -82.990439), ColumbusWaterPlantsMap.PAWP_TITLE);
		ColumbusWaterPlantsMap.setWaterPlantArea(map, params);
	},
	
	addHapCremeanWaterPlantToMap: function(map) {
		var params = {
			coordinates : [
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
				new google.maps.LatLng(40.176471, -83.188877)
			 ],
			mainColor : '#0000FF',
			fadedColor : '#5555FF',
			url : ColumbusWaterPlantsMap.HCWP_URL
		};
		
		ColumbusWaterPlantsMap.setWaterPlantMarker(map, new google.maps.LatLng(40.056874, -82.890695), ColumbusWaterPlantsMap.HCWP_TITLE);
		ColumbusWaterPlantsMap.setWaterPlantArea(map, params);
	}
};
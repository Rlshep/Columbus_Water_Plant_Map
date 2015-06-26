<?php /* Template Name: Water Map Big Template */ ?>

<html>
  <head>
    <style type="text/css">
      html, body, #map-canvas { height: 100%; margin: 0; padding: 0;}
    </style>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsc05XOQz7VGu7NTk9ktaG_CrAflFltjE"></script>
	<script type="text/javascript" src="<?php echo includes_url('js/ColumbusWaterPlantsMap.js');?>"></script>
  </head>
  <body onload="initializeMap(11);">
		<div id="map-canvas"></div>
  </body>
</html>

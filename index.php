<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Change Image Color</title>
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>

	<img src="img/test.jpg" alt="img" id="my-image">
	<span style="font-size:100px">+</span>
	<img src="img/filter.jpg" alt="img" id="filter-image">
	<span style="font-size:100px">=</span>
	<canvas id="myCanvas"  style="border:1px solid #d3d3d3"></canvas>
	<p>
		<button type="button" onclick="myFunction()">Answer</button>  
	</p>
	 <p id="demo"></p>
	<div class="bg"></div>
	<script src="js/app.js"></script>
</body>
</html>
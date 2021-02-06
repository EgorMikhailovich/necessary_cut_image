const bg = document.querySelector('.bg')
const img = document.querySelector('img')

bg.style.width = img.width + 'px'
bg.style.height = img.height + 'px'

function myFunction() {
	var x = document.getElementById("favcolor");

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var filterimg = document.getElementById("filter-image");
	ctx.drawImage(filterimg, 0, 0);
	const filterImageData = ctx.getImageData(0, 0, filterimg.width, filterimg.height);
	console.log(filterImageData.data.length);


	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	var img = document.getElementById("my-image");
	ctx.drawImage(img, 0, 0);
	var imgData = ctx.getImageData(0, 0, img.width, img.height);
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
		if(filterImageData.data[i] > 100 || filterImageData.data[i+ 1] > 100 || filterImageData.data[i + 2] > 100)
		{
			imgData.data[i] =  255  ;
			imgData.data[i+1] =  255; 
			imgData.data[i+2] = 255 ;
			imgData.data[i+3] = 255;
		}
		if( (filterImageData.data[i] < 100  && filterImageData.data[i] > 50) || (filterImageData.data[i+ 1] < 100  && filterImageData.data[ i+ 1] > 50) || (filterImageData.data[i + 2] < 100  && filterImageData.data[ i+ 2] > 50) )
		{
			imgData.data[i+3] = 255 -(filterImageData.data[i] + filterImageData.data[i + 1] + filterImageData.data[i + 2])/3;
		}
	}
	ctx.putImageData(imgData, 0, 0);
  }

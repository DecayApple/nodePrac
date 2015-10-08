(function(){
	var canvas=document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	video = document.getElementById('video');
	vendUrl = window.URL || window.webkitURL;
	
	navigator.getMedia = navigator.getUserMedia||
							navigator.webkitGetUserMedia||
							navigator.mozGetUserMedia||
							navigator.msGetUserMedia;
	
	navigator.getMedia({
		video : true;
		audio : false;
	},function (stream){
		video.src = vendUrl.createObjectURL(stream);
		video.play();
	}, function (error){
		//when error
	});
	
	video.addEventListener('play',function(){
		draw(this, context, 640, 480);
	},false);
	
	function draw(video, context, width, height){
		var image, data, i, r, g, b, brightness;
		
		context.drawImage(video,0,0,width,height);
		
		image = context.getImageData(0, 0, width, height);
		data = image.data;
		
		for(i = 0; i < data.length ; i = i + 4){
			
		}
		
		context.putImageData(image, 0, 0);
		
		setTimeout(draw, 10, video, context, width, height); 
	}
	
})();
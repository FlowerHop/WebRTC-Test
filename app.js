var http = require ("http");

http.createServer (function (request, response) {
  response.writeHead (200, {"Content-Type": "text/plain"});
  response.write ("<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WebRTC Test</title>
	
	<style>
	    #container {
          text-align: center;
	    }

        video {
          width: 600px;
          height: 600px;
          object-fit: cover;
        }
	</style>
</head>
<body>
    <div id="container">
	    <h1>Flowerhop's WebRTC Test</h1>    	
        <video autoplay></video>
    </div>

</body>

<!-- <script src="js/main.js"></script> -->
<script>
	
	'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


var constraints = {
  audio: false,
  video: true
};

var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);
</script>
</html>");
  response.end ();
}).listen (8888);
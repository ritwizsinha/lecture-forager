const ffmpeg = require('ffmpeg');
try {
	const process = new ffmpeg('/home/ritwiz/Videos/Crio-Demo.mp4');
    console.log(process);
	process.then(function (video) {
		// Callback mode
        console.log("Process callback is running");
		video.fnExtractSoundToMP3('./Crio-Demo.mp3', function (error, file) {
			if (!error)
				console.log('Audio file: ' + file);
		});
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
    console.log(e);
	console.log(e.code);
	console.log(e.msg);
}
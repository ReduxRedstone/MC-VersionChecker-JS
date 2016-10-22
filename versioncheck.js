$(function() {
	$.get('https://launchermeta.mojang.com/mc/game/version_manifest.json', function(data) {
		var json = $.parseJSON(data),
			serverIP = "play.citadelrpg.net",
			snapshot,
			release,
			current;

		snapshot = json["latest"]["snapshot"];
		release = json["latest"]["release"];

		$.get('https://mcapi.ca/query/'+serverIP+'/info', function(data) {
			current = data["version"];

			if (current !== snapshot) {
				$("#snapshot").html("Not up to date with latest snapshot! Current snapshot is "+snapshot);
			} else {
				$("#snapshot").html("up to date with latest snapshot!");
			}

			if (current !== release) {
				$("#release").html("Not up to date with latest release! Current release is "+release);
			} else {
				$("#release").html("up to date with latest release!");
			}
		})
	})
})
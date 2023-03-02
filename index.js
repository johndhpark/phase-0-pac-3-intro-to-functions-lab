function shout(str) {
	return str.toUpperCase();
}

function whisper(str) {
	return str.toLowerCase();
}

function logShout(str) {
	console.log(str.toUpperCase());
	return;
}

function logWhisper(str) {
	console.log(str.toLowerCase());
	return;
}

function sayHiToHeadphonedRoommate(str) {
	if (str == "Let's have dinner together!") {
		return "I would love to!";
	} else if (str == whisper(str)) {
		return "I can't hear you!";
	} else if (str == shout(str)) {
		return "YES INDEED!";
	}

	function isAllLower(str) {
		for (let char of str) {
			const ascii = char.charCodeAt(0);

			if (ascii >= 65 && ascii <= 90) return false;
		}

		return true;
	}

	function isAllUpper(str) {
		for (let char of str) {
			const ascii = char.charCodeAt(0);

			if (ascii >= 97 && ascii >= 122) return false;
		}

		return true;
	}
}

export { shout, whisper, logShout, sayHiToHeadphonedRoommate };

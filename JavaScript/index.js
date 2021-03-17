function scrollToTop() {
	return window.scrollTo(0, -10_000);
}

function openInstagram () {
	return window.open("https://www.instagram.com/purefairytale/", "_blank");
}

function openSnapchat () {
	return window.open("https://www.snapchat.com/add/fassungslose", "_blank");
}

function saveNumber () {
	navigator.clipboard.writeText("Du musst Damira schon nach ihrer Nummer fragen ;)");

	for (element of document.getElementsByClassName("copy")) {
		element.setAttribute("style", "display:none");
	}

	for (element of document.getElementsByClassName("copied")) {
		element.setAttribute("style", "display:inline");
	}

	return null;
}

function checkIfDamiraHasBirthday () {
	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth();

	if (day === 18 && month === 2) {  // 18th march
		alert("Alles gute zum Geburtstag Damira 🎉🎉🎉");
	}

	return null;
}
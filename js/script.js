$(document).ready(function () {
	$(".header-burger").click(function (event) {
		$(".header-burger,.header-menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
});

let tab_items = document.getElementsByClassName("tab-item");
tab_items[0].style.color = "white";
for (i = 0; i < tab_items.length; i++) {
	tab_items[i].onclick = function (event) {
		let tab = event.target;
		let tab_id = tab.id;
		let tab_block = document.getElementsByClassName("tabs-block");
		for (let i = 0; i < tab_block.length; i++) {
			tab_block[i].style.display = "none";
			tab_items[i].style.color = "#656565";
		}
		for (let i = 0; i < tab_block.length; i++) {
			if (tab_block[i].id.includes(tab_id)) {
				tab_block[i].style.display = "flex";
				tab.style.color = "white";
			}
		}
	};
}

let progressBar = document.getElementsByClassName("progress-bar");
let funded = document.getElementsByClassName("funded");
for (let i = 0; i < progressBar.length; i++) {
	let progressBarValue = progressBar[i].value;
	funded[i].innerHTML = progressBarValue + "% Funded";
}

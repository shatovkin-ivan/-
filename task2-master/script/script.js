$(document).ready(function () {
   $('a.anchor').click(function (e) {
      e.preventDefault();
      var elClick = $(this).attr('href');
      var dest = $(elClick).offset().top;
      $('html:not(:animated),body:not(:animated)').animate({ scrollTop: dest }, 1000);
	});

	let desc = $('.awards__title');
	let description = $('.awards__text');

	autoresize(description);
	autoresize(desc);
 })

function autoresize (heightDescription) {
	let reboot = 0;

	$(heightDescription).each(function () {
		let h = parseInt($(this).height());
		if (h > reboot) {
			reboot = h;
			}
		});
	$(heightDescription).height(reboot);
}


// window.onload = () => {
// 	const title = document.querySelectorAll('.awards__title');
// 	const text = document.querySelectorAll('.awards__text');
// 	res(title);
// 	res(text);
// }
// function res (heightText) {
// 	let startValue = 0;

// 	for(let i = 0; i < heightText.length; i++) {
// 		let h = heightText[i].offsetHeight;
// 		if (h > startValue) {
// 			startValue = h;
// 		}
// 		heightText[i].style.height = startValue + "px";
// 	}
// }
// function autoResize(contentElements) {
// 	for(let i = 0; i < contentElements.length; i++) {
// 		let elementHeight = contentElements.offsetHeight;

// 		contentElements[i].style.minHeight = elementHeight + "px";
// 	}
// }


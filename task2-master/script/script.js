$(document).ready(function () {
   $('a.anchor').click(function (e) {
      e.preventDefault();
      var elClick = $(this).attr('href');
      var dest = $(elClick).offset().top;
      $('html:not(:animated),body:not(:animated)').animate({ scrollTop: dest }, 1000);
	});

// 	let desc = $('.awards__title');
// 	let description = $('.awards__text');

// 	autoresize(description);
// 	autoresize(desc);
// })

// function autoresize (heightDescription) {
// 	let reboot = 0;

// 	$(heightDescription).each(function () {
// 		let h = parseInt($(this).height());
// 		if (h > reboot) {
// 			reboot = h;
// 			}
// 		});
// 	$(heightDescription).height(reboot);
// }
})


window.onload = () => {
	const title = document.querySelectorAll('.awards__title');
	const text = document.querySelectorAll('.awards__text');

	resize(title);
	resize(text);
}

function resize (heightText) {
	const startValue = 0;
	console.log(heightText);
	for(let i = 0; i < heightText.length; i++) {
		const hk = heightText.height;
		console.log(hk);
	}
}
// function autoResize(contentElements) {
// 	for(let i = 0; i < contentElements.length; i++) {
// 		let elementHeight = contentElements.offsetHeight;

// 		contentElements[i].style.minHeight = elementHeight + "px";
// 	}
// }


// Bootstrap Lab 
// By Ruben Lopez

const targetsToRemove = [];

const followContentTargets = function (elem) {
	
	if (elem.getAttribute('data-bs-css') === 'true') {
		var target = document.querySelector(elem.getAttribute('data-bs-content'));
		if (!targetsToRemove.includes(target)) targetsToRemove.push(target);
		let content = target.cloneNode(true);

		// show hidden elements
		content.classList.remove('d-none');
		if (content.classList.length == 0) {
			content.removeAttribute('class');
		}

		elem.setAttribute('data-bs-content', content.outerHTML);
		elem.setAttribute('data-bs-html', true);
	}

	return elem;
}

var popoverTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(followContentTargets(popoverTriggerEl));
});

var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(followContentTargets(tooltipTriggerEl));
});

//  Remove all of the targets from the DOM
targetsToRemove.forEach(function (target) {
	target.remove();
});
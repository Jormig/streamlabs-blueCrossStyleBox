// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
    let data = obj.detail.tags.badges;
    let messageId = obj.detail.messageId;
    let element = document.querySelector('[data-id="'+messageId+'"]');

    highestBadge = data.substring(0,data.indexOf('/'));
    element.classList.add(highestBadge);
});
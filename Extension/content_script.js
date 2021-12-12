let div = $('<iframe></iframe>');

div.prop('id', "kimiko-container");
div.prop('src', 'http://localhost:3000');

$(document.body).append(div);

$('body, #kimiko-container').on('keypress', (e) => {
    if (e.shiftKey && e.code === 'KeyD') {
        toggleDisplay();
    }
})


const PANEL_WIDTH = 300;
let PANEL_LEFT = 0;

function toggleDisplay(event) {

    if (PANEL_LEFT === 0) {
        PANEL_LEFT = -PANEL_WIDTH;
    } else {
        PANEL_LEFT = 0;
    }

    div.css('left', `${PANEL_LEFT}px`);
}

div.css('width', `${PANEL_WIDTH}px`);
div.css('left', '0px');



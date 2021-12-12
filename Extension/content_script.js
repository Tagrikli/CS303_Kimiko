let div = document.createElement("iframe");

div.id = "kimiko-container";

document.body.appendChild(div);
div.src = "http://localhost:3000";

const PANEL_WIDTH = 300;
let PANEL_LEFT = 0;

function toggleDisplay() {

    if (PANEL_LEFT === 0) {
        PANEL_LEFT = -PANEL_WIDTH;
    } else {
        PANEL_LEFT = 0;
    }

    div.style.left = `${PANEL_LEFT}px`;

}

div.style.width = `${PANEL_WIDTH}px`;
div.style.left = '0px';



document.addEventListener('keypress', (e) => {

    if (e.shiftKey && e.code === 'KeyD') {
        toggleDisplay();
    }

    console.log(e);

})


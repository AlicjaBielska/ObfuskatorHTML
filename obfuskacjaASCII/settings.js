let NO_LAYERS = 5;

function setLayers(x) {
    NO_LAYERS = x;
    console.log(x);1
}

function getLayers() {
    document.getElementById('hot-layers').value = NO_LAYERS;
}

let CHARACTERS_TO_USE = 'ABCD EFGHIJKL MNOPQRSTUVW XYZa bcd efghijk lmnopqrst uvwxyz 0123456789';

function getCharacters() {
    document.getElementById('characters').value = CHARACTERS_TO_USE;
}

function setCharacters(x) {
    CHARACTERS_TO_USE = x;
}

let CONTENT_LENGTH = 128;

function getContentLength() {
    document.getElementById('content-length').value = CONTENT_LENGTH;
}

function setContentLength(x) {
    CONTENT_LENGTH = x;
}


let NO_CLASSES = 3;

function getClasses() {
    document.getElementById('classes').value = NO_CLASSES;
}

function setClasses(x) {
    NO_CLASSES = x;
}



window.onload = function() {
    getCharacters();
    getLayers();
    getContentLength();
    getClasses();
};

function goHome() {
    document.getElementById('settings').classList.add('d-none');
    document.getElementById('main').classList.remove('d-none');
}

function goToSettings() {
    document.getElementById('settings').classList.remove('d-none');
    document.getElementById('main').classList.add('d-none');
}

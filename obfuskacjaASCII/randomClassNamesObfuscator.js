const classesToUse = [
    'x-row',
    'x-class',
    'x-2',
    'x-mt3',
    'x-public',
    'x-element',
    'x-div-parent',
    'x-row',
    'x-start',
    'x-list-paralel',
    'x-vertical',
    'x-hor',
    'x-lol',
    'x-test',
    'x-qa'
];

const obfuscateByRandomClasses = () => {
    let htmlString = document.getElementById('to-obfuscate').value;

    let domParser = new DOMParser();
    let dom = domParser.parseFromString(htmlString, "text/html");
    addClassesToElement(dom.documentElement);

    const output = document.getElementById('obfuscated');
    output.value = deobfuscate(dom.documentElement.outerHTML);
};

const addClassesToElement = (element) => {
    if(element.children) {
        Array.from(element.children).forEach(child => addClassesToElement(child));
        generateRandomClasses(element);
    }
};

const generateRandomClasses = (element) => {
    element.className = selectRandomClasses(3) + element.className.split(' ').join(selectRandomClasses(3)) + selectRandomClasses(3);
    return element;
};

function selectRandomClasses(count) {
    let result = '';
    for ( let i = 0; i < count; i++ ) {
      result += classesToUse[Math.floor(Math.random() * classesToUse.length)] + ' ';
    }
    return ` ${result} `;
}

function generateString(length) {
   let result           = '';
   const characters       = 'ABCD E_FGH_IJKL MN-OPQ-RSTU_V-W -XYZa bcd efg_hijk lmnopq-r-st uvwxyz 01234_56789';
   const  charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return ` ${result} `;
}

const deobfuscateRandomClasses = () => {
    let htmlString = document.getElementById('to-obfuscate').value;
    let domParser = new DOMParser();
    let dom = domParser.parseFromString(htmlString, "text/html");
    checkAndRemoveClasses(dom.documentElement);

    const output = document.getElementById('obfuscated');
    output.value = dom.documentElement.outerHTML;
};

const checkAndRemoveClasses = (element) => {
    if(element.children) {
        Array.from(element.children).forEach(child => checkAndRemoveClasses(child));
        classesToUse.forEach(className => {
            if(element.classList.contains(className)) removeClasses(element, className);
        })
    }
};

const removeClasses = (element, className) => {
    element.classList.remove(className);
};
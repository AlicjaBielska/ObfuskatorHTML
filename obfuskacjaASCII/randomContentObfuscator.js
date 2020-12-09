const obfuscateByRandomElements = () => {
    let htmlString = document.getElementById('to-obfuscate').value;

    let domParser = new DOMParser();
    let dom = domParser.parseFromString(htmlString, "text/html");
    obfuscateElement(dom.documentElement, dom);

    const output = document.getElementById('obfuscated');
    output.value = deobfuscate(dom.documentElement.outerHTML);
};

const obfuscateElement = (element, dom) => {
    if(element.children) {
        Array.from(element.children).forEach(child => obfuscateElement(child, dom));
        element.appendChild(generateRandomElement(dom));
    }
};

const generateRandomElement = (dom) => {
    const element = dom.createElement("div");
    element.innerText = generateString(128);
    element.className = generateString(128) + "boski-obfuscator " + generateString(128);
    element.style = "display: none";
    return element;
};


function generateString(length) {
   let result           = '';
   const characters       = 'ABCD EFGHIJKL MNOPQRSTUVW XYZa bcd efghijk lmnopqrst uvwxyz 0123456789';
   const  charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


const skipTags = ['head', 'button', 'html'];

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
        if (skipTags.includes(element.tagName)) return
        element.appendChild(generateRandomElement(dom));
    }
};

const generateRandomElement = (dom) => {
    const element = dom.createElement("div");
    const length = CONTENT_LENGTH;
    element.innerText = generateString(length);
    element.className = generateString(length) + "boski-obfuscator " + generateString(length);
    element.style = "display: none";
    return element;
};


function generateString(length) {
   let result           = '';
   const characters       = CHARACTERS_TO_USE;
   const  charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


const deobfuscateRandomContent = () => {
    let htmlString = document.getElementById('to-obfuscate').value;
    let domParser = new DOMParser();
    let dom = domParser.parseFromString(htmlString, "text/html");
    checkAndRemoveContent(dom.documentElement);

    const output = document.getElementById('obfuscated');
    output.value = dom.documentElement.outerHTML;
};

const checkAndRemoveContent = (element) => {
    if(element.children) {
        Array.from(element.children).forEach(child => checkAndRemoveContent(child));
        if(element.classList.contains("boski-obfuscator")) removeContent(element);
    }
};

const removeContent = (element) => {
    element.parentNode.removeChild(element);
};

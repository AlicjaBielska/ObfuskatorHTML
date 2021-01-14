const skipTags = ['head', 'button'];
const NO_LAYERS = 5;

const css = () => {
  let result = '';
  for (let i = 0; i<NO_LAYERS; i++) {
      result +=  `.layer-${i} .layer-${i}-element {visibility: visible;}`;
      result +=  `.layer-${i}-element {visibility: hidden;}`
  }
  return result;
};
const hotdol = () => {
    let htmlString = document.getElementById('to-obfuscate').value;

    let domParser = new DOMParser();
    let dom = domParser.parseFromString(htmlString, "text/html");

    console.log(dom.documentElement.children);
    hotdolize(dom.documentElement);
    layLayers(dom.documentElement, dom);
    addStyleTag(dom);

    const output = document.getElementById('obfuscated');
    output.value = dom.documentElement.outerHTML;
    // output.value = deobfuscate(dom.documentElement.outerHTML);
};

const hotdolize = (element) => {
    if (skipTags.includes(element.tagName.toLowerCase())) return;
    Array.from(element.children).forEach(child => { hotdolize(child)});
    if (element.children.length === 0) {
        let stringArray = Array.from(element.innerHTML.trim());
        let newArray = [];
        console.log(stringArray);
        stringArray.forEach((x, index) => {
            newArray.push(`<span class='layer-${index % NO_LAYERS}-element'>`);
            newArray.push(x);
            newArray.push('</span>');
        });
        console.log(newArray);
        element.innerHTML = newArray.join('');
    }
};

const layLayers = (element, dom) => {
    const body = element.getElementsByTagName('body')[0];
    const newBody = dom.createElement('body');
    for (let i = 0; i < NO_LAYERS; i++) {
        const layer = dom.createElement('div');
        console.log(layer.outerHTML);
        layer.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%';
        layer.className = `layer-${i}`;
        layer.innerHTML = body.cloneNode(true).innerHTML;
        newBody.innerHTML += layer.outerHTML;
    }
    body.innerHTML = newBody.innerHTML;
};

const addStyleTag = (dom) => {
    const style = dom.createElement('style');
    style.type = 'text/css';
    style.appendChild(dom.createTextNode(css()));
    dom.head.appendChild(style);
};

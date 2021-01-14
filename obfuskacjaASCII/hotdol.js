const skipTagsHot = ['head', 'button'];

const css = () => {
  let result = '';
  for (let i = 0; i < NO_LAYERS; i++) {
      result +=  `.layer-${i} .layer-${i}-element {visibility: visible;}`;
      result +=  `.layer-${i}-element {visibility: hidden;}`
  }
  return result;
};
const hotdol = () => {
    console.log('HOTDOL!!');
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
    if (skipTagsHot.includes(element.tagName.toLowerCase())) return;
    Array.from(element.children).forEach(child => { hotdolize(child)});
    if (element.children.length === 0) {
        let stringArray = Array.from(element.innerHTML.trim());
        let newArray = [];
        stringArray.forEach((x, index) => {
            newArray.push(`<span class='layer-${index % NO_LAYERS}-element'>`);
            newArray.push(x);
            newArray.push('</span>');
        });
        element.innerHTML = newArray.join('');
    }
};

const layLayers = (element, dom) => {
    const body = element.getElementsByTagName('body')[0];
    const newBody = dom.createElement('body');
    let i = 0;
    for (i; i < NO_LAYERS; i++) {
        const layer = dom.createElement('div');
        layer.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%';
        layer.className = `layer-${i}`;
        layer.innerHTML = body.cloneNode(true).innerHTML;
        if (i < NO_LAYERS - 1)
        Array.from(layer.children).forEach(child => {
            changeIds(child, i);
        });

        newBody.innerHTML += layer.outerHTML;
    }
    body.innerHTML = newBody.innerHTML;
};

const changeIds = (element, x) => {
    if (element.id.length > 0) element.id = element.id + `-layer-${x}`;
    Array.from(element.children).forEach(child => changeIds(child, x));
    console.log(element.id);
};

const addStyleTag = (dom) => {
    const style = dom.createElement('style');
    style.type = 'text/css';
    style.appendChild(dom.createTextNode(css()));
    dom.head.appendChild(style);
};

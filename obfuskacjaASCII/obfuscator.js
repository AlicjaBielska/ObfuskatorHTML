
const newLineCode = '\n'.charCodeAt(0).toString(16);
const getChar = (character) => {
    let code = character.charCodeAt(0).toString(16);
    if (code === newLineCode) {
        return '';
    }
    return `%${code}`;
};

const beginningString = '<script>document.write(unescape("';
const closingString = '"))</script>';

const getObfuscatedString = (htmlString) => {
    return [...htmlString].map(getChar).join('');
};

const obfuscate = (htmlString) => {
    return [beginningString, getObfuscatedString(htmlString), closingString].join('');
};

const deobfuscate = (htmlString) => {
    return unescape(htmlString.replace(beginningString, '').replace(closingString, ''));
};

const obfuscateAndDisplay = () => {
    const htmlString = document.getElementById('to-obfuscate').value;
    const output = document.getElementById('obfuscated');
    output.innerText = obfuscate(htmlString);
};

const deobfuscateAndDisplay = () => {
    const htmlString = document.getElementById('to-obfuscate').value;
    const output = document.getElementById('obfuscated');
    output.innerText = deobfuscate(htmlString);
};


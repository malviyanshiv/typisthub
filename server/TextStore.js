store = [
    "I've sold monorails, and by gum, it put them on the map.",
    "There is nothing more interesting then leaning and moving ahead.",
    "Text with punctuations are hard to type.",
    "If someone knows your worth more then you, u desere such person more.",
    "Eat, code, sleep and repeat.",
];

addText = (text) => {
    text = text.trim();
    store.push(text);
};

getText = () => {
    return store[Math.floor(Math.random() * store.length)];
};

module.exports = {
    addText,
    getText,
};

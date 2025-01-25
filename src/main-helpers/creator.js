const creator = (parametr) => {
    const element = document.createElement(parametr.tagName);
    element.innerText = parametr.text;

    if (parametr.classList) {
        element.classList.add(...parametr.classList);
    }

    for (const key in parametr.attributes) {
        console.log(key);
        console.log(parametr.attributes[key]);
        element.setAttribute(key, parametr.attributes[key]);
    }

    return element;
};

export default creator;

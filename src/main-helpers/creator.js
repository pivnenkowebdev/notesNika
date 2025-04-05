const creator = (parametr) => {
    const element = document.createElement(parametr.tagName);

    if (parametr.text) {
        element.innerText = parametr.text;
    }

    if (parametr.classList) {
        element.classList.add(...parametr.classList);
    }

    for (const key in parametr.attributes) {
        element.setAttribute(key, parametr.attributes[key]);
    }

    return element;
};

export default creator;

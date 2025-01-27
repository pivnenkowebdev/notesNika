import { headerCreator } from './header/header.js';

const init = () => {
    const appContainer = document.body;
    const headerElement = headerCreator();

    appContainer.append(headerElement);
};
init();

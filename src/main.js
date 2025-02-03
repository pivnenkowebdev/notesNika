import { makeBtn } from './add-btn/add-btn.js';
import { headerCreator } from './header/header.js';

const init = () => {
    const appContainer = document.body;
    const headerElement = headerCreator();

    const addBtn = makeBtn();

    appContainer.append(headerElement);
    appContainer.append(addBtn);
};
init();

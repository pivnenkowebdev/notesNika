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

// 1. обработать отправку формы
// 2 получить данные из формы
// 3 распределить данные по массивам
// 4 сохранить даные в локалку

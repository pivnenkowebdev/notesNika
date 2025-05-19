import creator from '../main-helpers/creator';
import {
    buttonSearchParams,
    formSearchParams,
    iconButtonSearchParams,
    inputSearchParams,
    wrapperInputParams,
} from './search-params';

const search = () => {
    // 1 создать элементы формы для поиска
    // 2 стили и ховер
    // 3 кнопка дожна придерживаться общ стиля
    const inputSearchElement = creator(inputSearchParams);
    const formSearchElement = creator(formSearchParams);
    const buttonSearchElement = creator(buttonSearchParams);
    const iconButtonSearchElement = creator(iconButtonSearchParams);
    const wrapperInputElement = creator(wrapperInputParams);

    formSearchElement.append(wrapperInputElement);
    wrapperInputElement.append(inputSearchElement);
    formSearchElement.append(buttonSearchElement);
    buttonSearchElement.append(iconButtonSearchElement);

    formSearchElement.addEventListener('click', (event) => searchOpen(event));
    return formSearchElement;
};

const searchOpen = (event) => {
    const isBtn = event.target.closest('#searchButton');
    if (isBtn) {
        const isForm = isBtn.closest('#formSearch');
        if (isForm) {
            isForm.classList.toggle('open');
        }
    }
};

export { search };

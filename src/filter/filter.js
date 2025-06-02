import creator from '../main-helpers/creator';
import { allNotes } from '../main-helpers/data-handler';
import { clearNotes, displayNotes } from '../notes/notes';
import {
    allBtnParams,
    favoriteBtnParams,
    wrapperFilterParams,
} from './filter-params';

const filter = () => {
    const wrapperFilterElement = creator(wrapperFilterParams);
    const allBtnElement = creator(allBtnParams);
    const favoriteBtnElement = creator(favoriteBtnParams);

    wrapperFilterElement.append(allBtnElement, favoriteBtnElement);

    wrapperFilterElement.addEventListener('click', (event) => {
        filterDispatch(event);
    });

    return wrapperFilterElement;
};

const filterDispatch = (event) => {
    const isBtn = event.target.closest('[data-action]');
    let action;

    if (isBtn) {
        action = isBtn.dataset.action;
    }

    switch (action) {
        case 'all':
            clearNotes();
            displayNotes(allNotes.favorite);
            displayNotes(allNotes.regular);
            break;
        case 'favorite':
            clearNotes();
            displayNotes(allNotes.favorite);
            break;
    }
};

export default filter;

// 1. прослушать клик на контейнере +
// 2. убедиться что клик произошел на кнопке
// 3. обработать клик на кнопке

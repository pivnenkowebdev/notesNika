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
        setStyle(event);
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

const setStyle = (event) => {
    const parent = event.currentTarget;
    const buttons = parent.querySelectorAll('[data-action]');
    const isBtn = event.target.closest('[data-action]');

    buttons.forEach((btn) => {
        btn.classList.remove('text-white', 'bg-cyan-600');
        btn.classList.add('text-cyan-600');
    });
    isBtn.classList.add('bg-cyan-600', 'text-white');
    console.log(event.target);
};

export default filter;

import creator from '../main-helpers/creator';
import {
    buttonSearchParams,
    formSearchParams,
    iconButtonSearchParams,
    inputSearchParams,
    wrapperInputParams,
} from './search-params';

const search = () => {
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
    inputSearchElement.addEventListener('input', (event) => searching(event));
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

const searching = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const foundedNotes = document.querySelectorAll('[data-item]');

    foundedNotes.forEach((note) => {
        const noteText = note.querySelector('[data-note-text]').innerText;
        const noteHeader = note.querySelector('[data-note-header]').innerText;

        if (
            noteText.toLowerCase().includes(inputValue) ||
            noteHeader.toLowerCase().includes(inputValue)
        ) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
};

export { search };

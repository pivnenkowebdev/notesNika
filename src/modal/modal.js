import creator from '../main-helpers/creator.js';
import { allNotes, dataHandler } from '../main-helpers/data-handler.js';
import { displayNotes, clearNotes } from '../notes/notes.js';
import {
    addBtnParams,
    btnContainerParams,
    canselBtnParams,
    checkboxParams,
    fadeParams,
    fakeCheckboxParams,
    formParams,
    headerFormParams,
    labelParams,
    textAreaParams,
    textInputParams,
} from './modal-params.js';

const showForm = (status = false, objectNote = {}) => {
    const isForm = document.querySelector('#form');
    if (!isForm) {
        const appContainer = document.body;
        const fadeElem = creator(fadeParams);

        objectNote.id
            ? (formParams.attributes['data-note'] = objectNote.id)
            : delete formParams.attributes['data-note'];

        const formElem = creator(formParams);
        const headerFormElem = creator(headerFormParams);

        objectNote.title
            ? (textInputParams.attributes.value = objectNote.title)
            : delete textInputParams.attributes.value;

        const textInputElem = creator(textInputParams);

        objectNote.textarea
            ? (textAreaParams.text = objectNote.textarea)
            : delete textAreaParams.text;

        const textAreaElem = creator(textAreaParams);

        const btnContainerElem = creator(btnContainerParams);
        const canselBtnElem = creator(canselBtnParams);

        status ? (addBtnParams.text = 'Edit') : (addBtnParams.text = 'Add');

        const addBtnElem = creator(addBtnParams);

        const labelElem = creator(labelParams);

        objectNote.checkbox
            ? (checkboxParams.attributes.checked = objectNote.checkbox)
            : delete checkboxParams.attributes.checked;

        const checkboxElem = creator(checkboxParams);

        const fakeCheckboxElem = creator(fakeCheckboxParams);

        appContainer.append(fadeElem);
        appContainer.append(formElem);
        formElem.append(headerFormElem);
        headerFormElem.append(textInputElem);
        labelElem.append(checkboxElem);
        labelElem.append(fakeCheckboxElem);
        headerFormElem.append(labelElem);
        formElem.append(textAreaElem);
        formElem.append(btnContainerElem);
        btnContainerElem.append(canselBtnElem);
        btnContainerElem.append(addBtnElem);

        textInputElem.focus();

        formElem.addEventListener('submit', (event) => {
            formHandler(event);
            deleteElem(formElem);
            deleteElem(fadeElem);
        });
        formElem.addEventListener('click', (event) =>
            remove(event, formElem, fadeElem)
        );
    }
};

const remove = (event, formElem, fadeElem) => {
    const isCancelBtn = event.target.closest('[data-reset]');
    if (isCancelBtn) {
        deleteElem(formElem);
        deleteElem(fadeElem);
    }
};

const formHandler = (event) => {
    event.preventDefault();
    const dataFromForm = new FormData(event.target);
    dataFromForm.append('oldId', event.target.dataset.note);

    dataHandler(dataFromForm);
    clearNotes();
    displayNotes(allNotes.favorite);
    displayNotes(allNotes.regular);
};

const deleteElem = (element) => {
    element.remove();
};

export { showForm };

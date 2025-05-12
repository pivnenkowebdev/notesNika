import creator from '../main-helpers/creator.js';
import {
    deleteNote,
    allNotes,
    findNote,
    changeStatus,
} from '../main-helpers/data-handler.js';
import { showForm } from '../modal/modal.js';
import {
    buttonsContainerParams,
    dateParams,
    editButtonParams,
    favoriteButtonGoldParams,
    favoriteButtonParams,
    listParams,
    noteContainerParams,
    noteHeaderParams,
    noteTextParams,
    noteTitleParams,
    removeButtonParams,
    wrapperDateAndButtonParams,
} from './notes-params.js';

const clearNotes = () => {
    const listNotesElement = document.querySelector('#list');
    if (listNotesElement) {
        listNotesElement.innerHTML = '';
    }
};

const displayNotes = (arrayNotes) => {
    let listNotesElement = document.querySelector('#list');
    const template = document.createDocumentFragment();
    if (!listNotesElement) {
        const appContainer = document.body;
        listNotesElement = creator(listParams);
        appContainer.append(listNotesElement);
        listNotesElement.addEventListener('click', (event) =>
            eventDispatchNote(event)
        );
    }

    arrayNotes.forEach((note) => {
        noteContainerParams.attributes.id = note.id;
        const noteContainer = creator(noteContainerParams);
        const noteHeader = creator(noteHeaderParams);

        noteTitleParams.text = note.title ? note.title : '';

        const noteTitle = creator(noteTitleParams);

        const wrapperDateAndButton = creator(wrapperDateAndButtonParams);
        const date = creator(dateParams);

        const status = note.isEdit ? 'Changed' : 'Created';
        date.innerText = `${status} ${note.date.currentDate} at ${note.date.currentTime}`;
        const buttonsContainer = creator(buttonsContainerParams);
        let favoriteButton = note.checkbox
            ? creator(favoriteButtonGoldParams)
            : creator(favoriteButtonParams);

        const editButton = creator(editButtonParams);
        const removeButton = creator(removeButtonParams);

        noteTextParams.text = note.textarea ? note.textarea : '';
        const noteText = creator(noteTextParams);

        noteContainer.append(noteHeader);
        noteHeader.append(noteTitle);
        wrapperDateAndButton.append(date);
        wrapperDateAndButton.append(buttonsContainer);
        noteHeader.append(wrapperDateAndButton);
        buttonsContainer.append(favoriteButton);
        buttonsContainer.append(editButton);
        buttonsContainer.append(removeButton);
        noteContainer.append(noteText);

        template.append(noteContainer);
    });
    listNotesElement.append(template);
};

const eventDispatchNote = (event) => {
    const actionBtn = event.target.closest('[data-action]');
    let currentAction = null;
    let currentId = null;

    if (actionBtn) {
        currentId = actionBtn.closest('[data-item]').id;
        currentAction = actionBtn.dataset.action;
    }
    const status = true;
    switch (currentAction) {
        case 'remove':
            deleteNote(currentId);
            clearNotes();
            displayNotes(allNotes.favorite);
            displayNotes(allNotes.regular);
            break;
        case 'edit':
            showForm(status, findNote(currentId));
            break;
        case 'status':
            changeStatus(currentId);
            clearNotes();
            displayNotes(allNotes.favorite);
            displayNotes(allNotes.regular);
    }
};

export { displayNotes, clearNotes };

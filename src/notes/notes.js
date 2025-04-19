import creator from '../main-helpers/creator.js';
import { deleteNote, allNotes } from '../main-helpers/data-handler.js';
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

        if (note.title) {
            noteTitleParams.text = note.title;
        } else {
            noteTitleParams.text = '';
        }
        const noteTitle = creator(noteTitleParams);

        const wrapperDateAndButton = creator(wrapperDateAndButtonParams);
        const date = creator(dateParams);
        date.innerText = `Created ${note.date.currentDate} at ${note.date.currentTime}`;
        const buttonsContainer = creator(buttonsContainerParams);
        let favoriteButton = note.checkbox
            ? creator(favoriteButtonGoldParams)
            : creator(favoriteButtonParams);

        const editButton = creator(editButtonParams);
        const removeButton = creator(removeButtonParams);

        if (note.textarea) {
            noteTextParams.text = note.textarea;
        } else {
            noteTextParams.textarea = '';
        }
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

    switch (currentAction) {
        case 'remove':
            deleteNote(currentId);
            clearNotes();
            displayNotes(allNotes.favorite);
            displayNotes(allNotes.regular);
            break;

        default:
            break;
    }
};

export { displayNotes, clearNotes };

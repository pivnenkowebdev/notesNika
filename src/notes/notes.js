import creator from '../main-helpers/creator.js';
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
    if (!listNotesElement) {
        const appContainer = document.body;
        listNotesElement = creator(listParams);
        appContainer.append(listNotesElement);
    }

    arrayNotes.forEach((note) => {
        console.log(note);

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
        date.innerText = 'Changed 28.03.2025 at 22:32';
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

        listNotesElement.append(noteContainer);
    });
};

export { displayNotes, clearNotes };

//  1 отформатировать код в этом файле (html template)
// 2 создать дату
//  3 сделать функцию удаления

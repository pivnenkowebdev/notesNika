import creator from '../main-helpers/creator.js';
import { listParams } from './notes-params.js';

const displayNotes = (arrayNotes) => {
    let listNotesElement = document.querySelector('#list');
    if (!listNotesElement) {
        const appContainer = document.body;
        listNotesElement = creator(listParams);
        appContainer.append(listNotesElement);
    }

    arrayNotes.forEach((note) => {
        console.log(note);
    });
};

export default displayNotes;

//  создать рендер заметок
``;

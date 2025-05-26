import { makeBtn } from './add-btn/add-btn.js';
import filter from './filter/filter.js';
import { headerCreator } from './header/header.js';
import { allNotes } from './main-helpers/data-handler.js';
import { displayNotes, clearNotes } from './notes/notes.js';

const init = () => {
    const appContainer = document.body;
    const headerElement = headerCreator();
    const addBtn = makeBtn();
    const wrapperFilter = filter();

    appContainer.append(headerElement);
    appContainer.append(addBtn);
    appContainer.append(wrapperFilter);

    // const allNotes = initData();
    clearNotes();
    displayNotes(allNotes.favorite);
    displayNotes(allNotes.regular);
};
init();

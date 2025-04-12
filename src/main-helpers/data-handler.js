const keyLocal = 'notes';

const dataToJSON = (data) => {
    const dataString = JSON.stringify(data);
    return dataString;
};

const dataToLocalStorage = (key, dataString) => {
    localStorage.setItem(key, dataString);
};

const dataFromLocalStorage = (key) => {
    return localStorage.getItem(key);
};

const dataParse = (dataString) => {
    return JSON.parse(dataString);
};

const initData = () => {
    const isData = dataFromLocalStorage(keyLocal);
    if (isData) {
        return dataParse(isData);
    } else {
        const templateData = {
            regular: [],
            favorite: [],
        };

        dataToLocalStorage(keyLocal, dataToJSON(templateData));
    }
};

const dataHandler = (dataFromForm) => {
    const newNote = {
        title: dataFromForm.get('title'),
        checkbox: dataFromForm.get('checkbox'),
        textarea: dataFromForm.get('textarea'),
        date: setDate(),
        id: setID(dataFromForm.get('checkbox')),
    };
    dataToArray(newNote);
    dataToLocalStorage(keyLocal, dataToJSON(allNotes));
};

const dataToArray = (objectNote) => {
    objectNote.checkbox
        ? allNotes.favorite.push(objectNote)
        : allNotes.regular.push(objectNote);
};

const setDate = () => {
    const todayDate = new Date();
    const currentTime = todayDate.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
    const currentDate = todayDate.toLocaleDateString('ru-RU');
    return { currentTime, currentDate };
};

const setID = (statusNote) => {
    let newID = null;
    if (statusNote) {
        newID = allNotes.favorite.length + 'favorite';
    } else {
        newID = allNotes.regular.length + 'regular';
    }
    return newID;
};

const allNotes = initData();
export { dataHandler, allNotes };

// для удаления заметок создать для них id

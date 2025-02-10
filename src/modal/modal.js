import creator from '../main-helpers/creator.js';
import {
    checkboxParams,
    fadeParams,
    fakeCheckboxParams,
    formParams,
    headerFormParams,
    labelParams,
    textInputParams,
} from './modal-params.js';

const showForm = () => {
    const appContainer = document.body;

    const fadeElem = creator(fadeParams);
    const formElem = creator(formParams);
    const headerFormElem = creator(headerFormParams);
    const textInputElem = creator(textInputParams);

    const labelElem = creator(labelParams);
    const checkboxElem = creator(checkboxParams);
    const fakeCheckboxElem = creator(fakeCheckboxParams);

    appContainer.append(fadeElem);
    appContainer.append(formElem);
    formElem.append(headerFormElem);
    headerFormElem.append(textInputElem);
    labelElem.append(checkboxElem);
    labelElem.append(fakeCheckboxElem);
    headerFormElem.append(labelElem);
};

export { showForm };

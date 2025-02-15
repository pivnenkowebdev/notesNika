import creator from '../main-helpers/creator.js';
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

const showForm = () => {
    const appContainer = document.body;

    const fadeElem = creator(fadeParams);
    const formElem = creator(formParams);
    const headerFormElem = creator(headerFormParams);
    const textInputElem = creator(textInputParams);
    const textAreaElem = creator(textAreaParams);
    const btnContainerElem = creator(btnContainerParams);
    const canselBtnElem = creator(canselBtnParams);
    const addBtnElem = creator(addBtnParams);

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
    formElem.append(textAreaElem);
    formElem.append(btnContainerElem);
    btnContainerElem.append(canselBtnElem);
    btnContainerElem.append(addBtnElem);
};

export { showForm };

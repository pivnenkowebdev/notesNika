import creator from '../main-helpers/creator.js';
import { fadeParams, formParams, headerFormParams } from './modal-params.js';

const showForm = () => {
    const appContainer = document.body;

    const fadeElem = creator(fadeParams);
    const formElem = creator(formParams);
    const headerFormElem = creator(headerFormParams);

    appContainer.append(fadeElem);
    appContainer.append(formElem);
    formElem.append(headerFormElem);
};

export { showForm };

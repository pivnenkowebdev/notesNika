import creator from '../main-helpers/creator';
import {
    btnNightModeParams,
    headerParams,
    imgParams,
    titleParams,
} from './header-params';

const headerCreator = () => {
    const headerElement = creator(headerParams);
    const titleElement = creator(titleParams);

    const btnNightModeElement = creator(btnNightModeParams);
    const imgElement = creator(imgParams);
    btnNightModeElement.append(imgElement);

    btnNightModeElement.addEventListener('click', nightMode);

    headerElement.append(titleElement);
    headerElement.append(btnNightModeElement);

    return headerElement;
};

const nightMode = () => {
    const appContainer = document.querySelector('html');
    appContainer.classList.toggle('dark');
};

export { headerCreator };

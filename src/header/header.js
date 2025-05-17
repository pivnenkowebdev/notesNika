import creator from '../main-helpers/creator';
import { search } from '../search/search';
import {
    btnNightModeParams,
    headerParams,
    imgParams,
    titleParams,
    wrapperHeaderParams,
} from './header-params';
//  форму создать тут,
const headerCreator = () => {
    const headerElement = creator(headerParams);
    const titleElement = creator(titleParams);

    const btnNightModeElement = creator(btnNightModeParams);
    const imgElement = creator(imgParams);
    btnNightModeElement.append(imgElement);
    const searchForm = search();

    const wrapperHeaderElement = creator(wrapperHeaderParams);

    btnNightModeElement.addEventListener('click', nightMode);

    headerElement.append(titleElement);
    headerElement.append(wrapperHeaderElement);
    wrapperHeaderElement.append(searchForm, btnNightModeElement);

    return headerElement;
};

const nightMode = () => {
    const appContainer = document.querySelector('html');
    appContainer.classList.toggle('dark');
};

export { headerCreator };

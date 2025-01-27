import creator from '../main-helpers/creator';
import { headerParams, titleParams } from './header-params';

const headerCreator = () => {
    const headerElement = creator(headerParams);
    const titleElement = creator(titleParams);

    headerElement.append(titleElement);
    return headerElement;
};

export { headerCreator };

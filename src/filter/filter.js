import creator from '../main-helpers/creator';
import {
    allBtnParams,
    favoriteBtnParams,
    wrapperFilterParams,
} from './filter-params';

const filter = () => {
    const wrapperFilterElement = creator(wrapperFilterParams);
    const allBtnElement = creator(allBtnParams);
    const favoriteBtnElement = creator(favoriteBtnParams);

    wrapperFilterElement.append(allBtnElement, favoriteBtnElement);

    return wrapperFilterElement;
};

export default filter;

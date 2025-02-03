import creator from '../main-helpers/creator';
import { addBtnParams, iconParams, textBtnParams } from './add-btn-params';

const makeBtn = () => {
    const btn = creator(addBtnParams);
    const btnText = creator(textBtnParams);
    const btnIcon = creator(iconParams);

    btn.append(btnText, btnIcon);

    return btn;
};

export { makeBtn };

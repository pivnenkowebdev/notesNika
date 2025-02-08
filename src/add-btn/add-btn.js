import creator from '../main-helpers/creator.js';
import { showForm } from '../modal/modal.js';
import { addBtnParams, iconParams, textBtnParams } from './add-btn-params.js';

const makeBtn = () => {
    const btn = creator(addBtnParams);
    const btnText = creator(textBtnParams);
    const btnIcon = creator(iconParams);

    btn.append(btnText, btnIcon);

    btn.addEventListener('click', () => showForm());

    return btn;
};

export { makeBtn };

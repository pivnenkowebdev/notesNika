const formParams = {
    tagName: 'form',
    text: '',
    classList: [
        'max-w-4xl',
        'w-full',
        'bg-white',
        'px-7',
        'py-9',
        'absolute',
        'top-[50%]',
        'left-[50%]',
        'translate-x-[-50%]',
        'translate-y-[-50%]',
        'rounded-xl',
    ],
    attributes: {},
};

const fadeParams = {
    tagName: 'div',
    text: '',
    classList: [
        'h-screen',
        'w-screen',
        'bg-slate-300',
        'opacity-80',
        'absolute',
        'top-[50%]',
        'left-[50%]',
        'translate-x-[-50%]',
        'translate-y-[-50%]',
    ],
    attributes: {},
};

const headerFormParams = {
    tagName: 'header',
    text: '',
    classList: [
        'flex',
        'gap-2',
        'max-w-[350px]',
        'w-full',
        'items-center',
        'mb-4',
        'border-b-2',
        'border-cyan-600',
    ],
    attributes: {},
};

const textInputParams = {
    tagName: 'input',
    text: '',
    classList: ['text-black', 'text-2xl', 'font-medium', 'outline-none'],
    attributes: {
        placeholder: 'Введите заголовок',
    },
};

const labelParams = {
    tagName: 'label',
    text: '',
    classList: [],
    attributes: {},
};

const checkboxParams = {
    tagName: 'input',
    text: '',
    classList: ['real-checkbox'],
    attributes: {
        type: 'checkbox',
    },
};

const fakeCheckboxParams = {
    tagName: 'span',
    text: '',
    classList: ['fake-checkbox'],
    attributes: {},
};

const textAreaParams = {
    tagName: 'textarea',
    text: '',
    classList: [
        'min-h-48',
        'max-h-96',
        'resize-y',
        'w-full',
        'textarea',
        'outline-none',
        'mb-4',
    ],
    attributes: {
        placeholder: 'Введите текст',
    },
};

const btnContainerParams = {
    tagName: 'div',
    text: '',
    classList: ['gap-4', 'flex', 'justify-end'],
    attributes: {},
};

const canselBtnParams = {
    tagName: 'button',
    text: 'Cancel',
    classList: ['bg-rose-500', 'rounded-lg', 'w-24', 'h-8', 'text-white'],
    attributes: {},
};

const addBtnParams = {
    tagName: 'button',
    text: 'Add',
    classList: ['bg-cyan-600', 'rounded-lg', 'w-24', 'h-8', 'text-white'],
    attributes: {},
};

export {
    formParams,
    fadeParams,
    headerFormParams,
    textInputParams,
    labelParams,
    checkboxParams,
    fakeCheckboxParams,
    textAreaParams,
    addBtnParams,
    canselBtnParams,
    btnContainerParams,
};

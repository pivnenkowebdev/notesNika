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
        'dark:bg-cyan-900',
        'duration-300',
    ],
    attributes: {
        id: 'form',
    },
};

const fadeParams = {
    tagName: 'div',
    text: '',
    classList: [
        'h-screen',
        'w-screen',
        'bg-slate-300',
        'opacity-80',
        'dark:bg-slate-900',
        'absolute',
        'top-[50%]',
        'left-[50%]',
        'translate-x-[-50%]',
        'translate-y-[-50%]',
        'duration-300',
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
        'dark:border-white',
        'duration-300',
    ],
    attributes: {},
};

const textInputParams = {
    tagName: 'input',
    text: '',
    classList: [
        'text-black',
        'text-2xl',
        'font-medium',
        'outline-none',
        'dark:bg-cyan-900',
        'duration-300',
    ],
    attributes: {
        placeholder: 'Введите заголовок',
        name: 'title',
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
        name: 'checkbox',
    },
};

const fakeCheckboxParams = {
    tagName: 'span',
    text: '',
    classList: [
        'fake-checkbox',
        'w-6',
        'h-6',
        'block',
        'bg-[url("/star-btn.svg")]',
        'bg-no-repeat',
        'bg-contain',
        'bg-center',
        'cursor-pointer',
        'dark:bg-[url("/star-btn-night.svg")]',
        'duration-300',
    ],
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
        'dark:bg-cyan-900',
        'duration-300',
    ],
    attributes: {
        placeholder: 'Введите текст',
        name: 'textarea',
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
    classList: [
        'bg-rose-500',
        'rounded-lg',
        'w-24',
        'h-8',
        'text-white',
        'dark:bg-rose-800',
        'duration-300',
    ],
    attributes: {},
};

const addBtnParams = {
    tagName: 'button',
    text: 'Add',
    classList: [
        'bg-cyan-600',
        'rounded-lg',
        'w-24',
        'h-8',
        'text-white',
        'dark:text-cyan-600',
        'dark:bg-white',
        'duration-300',
    ],
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

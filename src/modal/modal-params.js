const formParams = {
    tagName: 'form',
    text: '',
    classList: [
        'max-w-4xl',
        'w-[98%]',
        'bg-white',
        'px-7',
        'py-9',
        'absolute',
        'top-[50%]',
        'left-[50%]',
        'translate-x-[-50%]',
        'translate-y-[-50%]',
        'rounded-xl',
        'dark:bg-gray-900',
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
        'w-full',
        'h-screen',
        'bg-[#e0e0e0bc]',
        'dark:bg-[#15576bdc]',
        'backdrop-blur-sm',
        'fixed',
        'left-0',
        'top-0',
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
        'dark:bg-gray-900',
        'duration-300',
        'dark:text-white',
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
        'dark:bg-gray-900',
        'duration-300',
        'dark:text-white',
        'focus:shadow-[0_0_8px_1px]',
        'focus:shadow-slate-400',
        'dark:focus:shadow-cyan-600',
        'rounded-lg',
        'p-2',
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
    attributes: {
        type: 'reset',
        'data-reset': '',
    },
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

const inputSearchParams = {
    tagName: 'input',
    classList: ['border-cyan-600', 'border-2', 'rounded-lg', 'pl-2', 'pr-6'],
    attributes: {},
};

const wrapperInputParams = {
    tagName: 'div',
    text: '',
    classList: [
        'absolute',
        'top-[50%]',
        'translate-y-[-50%]',
        'left-2',
        'translate-x-[-90%]',
        'w-0',
        'overflow-hidden',
        'duration-500',
        'wrapper-input',
    ],
    attributes: {},
};

const formSearchParams = {
    tagName: 'div',
    classList: ['h-10', 'w-10', 'relative', 'form-search'],
    attributes: {
        id: 'formSearch',
    },
};

const buttonSearchParams = {
    tagName: 'button',
    classList: [
        'h-10',
        'w-10',
        'bg-cyan-600',
        'dark:bg-white',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
        'duration-300',
        'absolute',
        'top-[50%]',
        'left-[50%]',
        'translate-x-[-50%]',
        'translate-y-[-50%]',
        'search-button',
    ],
    attributes: {
        id: 'searchButton',
    },
};

const iconButtonSearchParams = {
    tagName: 'span',
    classList: [
        "bg-[url('/search.svg')]",
        'h-8',
        'w-8',
        'block',
        'bg-no-repeat',
        'bg-center',
        'duration-300',
        'bg-cover',
        'icon-search',
    ],
    attributes: {},
};

export {
    formSearchParams,
    buttonSearchParams,
    iconButtonSearchParams,
    inputSearchParams,
    wrapperInputParams,
};

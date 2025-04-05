const listParams = {
    tagName: 'ul',
    classList: [
        'flex',
        'flex-col',
        'gap-4',
        'w-[900px]',
        'max-h-[450px]',
        'overflow-x-hidden',
        'list',
        'px-4',
    ],
    attributes: {
        id: 'list',
    },
};

const noteContainerParams = {
    tagName: 'li',
    text: '',
    classList: ['border-2', 'border-cyan-600', 'rounded-md', 'px-3', 'py-2'],
    attributes: {},
};

const noteHeaderParams = {
    tagName: 'div',
    text: '',
    classList: ['flex', 'justify-between', 'items-center'],
    attributes: {},
};

const noteTitleParams = {
    tagName: 'h6',
    text: '',
    classList: ['text-cyan-600', 'font-medium', 'text-xl'],
    attributes: {},
};

const buttonsContainerParams = {
    tagName: 'div',
    text: '',
    classList: [],
    attributes: {},
};

const favoriteButtonParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/star-btn.svg')]",
        "dark:bg-[url('/moon.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
    ],
    attributes: {},
};

const favoriteButtonGoldParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/star-btn-gold.svg')]",
        "dark:bg-[url('/moon.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
    ],
    attributes: {},
};

const editButtonParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/edit-btn.svg')]",
        "dark:bg-[url('/moon.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
    ],
    attributes: {},
};

const removeButtonParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/trash-btn.svg')]",
        "dark:bg-[url('/moon.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
    ],
    attributes: {},
};

const noteTextParams = {
    tagName: 'p',
    text: '',
    classList: [],
    attributes: {},
};

const wrapperDateAndButtonParams = {
    tagName: 'div',
    text: '',
    classList: ['flex', 'gap-4', 'items-center'],
    attributes: {},
};

const dateParams = {
    tagName: 'span',
    text: '',
    classList: ['text-slate-400'],
    attributes: {},
};

export {
    listParams,
    noteContainerParams,
    noteHeaderParams,
    noteTitleParams,
    noteTextParams,
    buttonsContainerParams,
    favoriteButtonParams,
    editButtonParams,
    removeButtonParams,
    wrapperDateAndButtonParams,
    dateParams,
    favoriteButtonGoldParams,
};

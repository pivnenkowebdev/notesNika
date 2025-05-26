const listParams = {
    tagName: 'ul',
    classList: [
        'flex',
        'flex-col',
        'gap-4',
        'max-w-[900px]',
        'w-full',
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
    classList: [
        'border-2',
        'border-cyan-600',
        'duration-300',
        'rounded-md',
        'px-3',
        'py-2',
    ],
    attributes: {
        'data-item': '',
    },
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
    classList: [
        'text-cyan-600',
        'dark:text-white',
        'font-medium',
        'text-xl',
        'duration-300',
    ],
    attributes: {
        value: '',
        'data-note-header': '',
    },
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
        "dark:bg-[url('/star-btn-night.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
        'duration-300',
    ],
    attributes: {
        'data-action': 'status',
    },
};

const favoriteButtonGoldParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/star-btn-gold.svg')]",
        "dark:bg-[url('/star-btn-gold.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
        'duration-300',
    ],
    attributes: {
        'data-action': 'status',
    },
};

const editButtonParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/edit-btn.svg')]",
        "dark:bg-[url('/edit-btn-night.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
        'duration-300',
    ],
    attributes: {
        'data-action': 'edit',
    },
};

const removeButtonParams = {
    tagName: 'button',
    text: '',
    classList: [
        "bg-[url('/trash-btn.svg')]",
        "dark:bg-[url('/trash-btn-night.svg')]",
        'w-6',
        'h-6',
        'bg-no-repeat',
        'bg-center',
        'duration-300',
    ],
    attributes: {
        'data-action': 'remove',
    },
};

const noteTextParams = {
    tagName: 'p',
    text: '',
    classList: ['dark:text-slate-400', 'duration-300'],
    attributes: {
        'data-note-text': '',
    },
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

const addBtnParams = {
    tagName: 'button',
    text: '',
    classList: ['flex', 'items-center', 'gap-2', 'outline-none'],
    attributes: {},
};

const textBtnParams = {
    tagName: 'span',
    text: 'Add note',
    classList: ['text-2xl', 'font-medium', 'text-cyan-600', 'dark:text-white'],
    attributes: {},
};

const iconParams = {
    tagName: 'span',
    text: '',
    classList: [
        'h-8',
        'w-8',
        'block',
        'bg-no-repeat',
        'bg-center',
        'bg-contain',
        "bg-[url('/btn-add-icon.svg')]",
        "dark:bg-[url('/btn-add-icon-night.svg')]",
    ],
    attributes: {},
};

export { addBtnParams, textBtnParams, iconParams };

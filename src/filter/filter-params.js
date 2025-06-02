const wrapperFilterParams = {
    tagName: 'div',
    classList: ['flex', 'gap-2'],
    attributes: {},
};

const allBtnParams = {
    tagName: 'button',
    text: 'All Notes',
    classList: [
        'border-2',
        'border-cyan-600',
        'rounded-lg',
        'py-2',
        'px-2',
        'text-cyan-600',
        'dark:text-white',
    ],
    attributes: {
        'data-action': 'all',
    },
};

const favoriteBtnParams = {
    tagName: 'button',
    text: 'Favorites',
    classList: [
        'border-2',
        'border-cyan-600',
        'rounded-lg',
        'py-2',
        'px-2',
        'text-cyan-600',
        'dark:text-white',
    ],
    attributes: {
        'data-action': 'favorite',
    },
};

export { wrapperFilterParams, allBtnParams, favoriteBtnParams };

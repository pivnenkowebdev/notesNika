const headerParams = {
    tagName: 'header',
    text: '',
    classList: [
        'border-b-2',
        'border-cyan-600',
        'py-4',
        'px-2',
        'max-w-7xl',
        'mx-auto',
        'w-[96%]',
        'flex',
        'justify-between',
    ],
    attributes: {},
};

const titleParams = {
    tagName: 'h1',
    text: 'To-Do',
    classList: [
        'text-cyan-600',
        'text-3xl',
        'font-medium',
        'dark:text-red-600',
    ],
    attributes: {},
};

const btnNightModeParams = {
    tagName: 'button',
    text: '',
    classList: [
        'h-10',
        'w-10',
        'bg-cyan-600',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
    ],
    attributes: {},
};

const imgParams = {
    tagName: 'img',
    text: '',
    classList: ['h-8', 'w-8'],
    attributes: {
        src: '/sun-icon.svg',
    },
};

export { headerParams, titleParams, btnNightModeParams, imgParams };

const headerParams = {
    tagName: 'header',
    text: '',
    classList: [
        'border-b-2',
        'border-cyan-600',
        'dark:border-white',
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
    classList: ['text-cyan-600', 'text-3xl', 'font-medium', 'dark:text-white'],
    attributes: {},
};

const btnNightModeParams = {
    tagName: 'button',
    text: '',
    classList: [
        'h-10',
        'w-10',
        'bg-cyan-600',
        'dark:bg-white',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
    ],
    attributes: {},
};

const imgParams = {
    tagName: 'span',
    text: '',
    classList: [
        'h-8',
        'w-8',
        'block',
        'bg-no-repeat',
        'bg-center',
        "bg-[url('/sun-icon.svg')]",
        "dark:bg-[url('/moon.svg')]",
    ],
};

export { headerParams, titleParams, btnNightModeParams, imgParams };

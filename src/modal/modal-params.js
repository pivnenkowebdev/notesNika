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
    classList: ['flex', 'gap-2', 'max-w-96', 'w-full'],
    attributes: {},
};

export { formParams, fadeParams, headerFormParams };

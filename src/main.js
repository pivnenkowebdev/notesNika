import creator from './main-helpers/creator.js';
const buttonParams = {
    tagName: 'button',
    text: 'tap to me',
    classList: ['h-10', 'w-24', 'bg-cyan-400'],
    attributes: {
        id: 'testButton',
        'data-action': 'test',
    },
};

const testButton = creator(buttonParams);
document.body.append(testButton);

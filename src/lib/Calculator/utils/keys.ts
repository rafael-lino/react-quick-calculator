export const KEY_CODE = new Map([
    ['Numpad0', '0'],
    ['Numpad1', '1'],
    ['Numpad2', '2'],
    ['Numpad3', '3'],
    ['Numpad4', '4'],
    ['Numpad5', '5'],
    ['Numpad6', '6'],
    ['Numpad7', '7'],
    ['Numpad8', '8'],
    ['Numpad9', '9'],
    ['NumpadDecimal', '.'],
    ['NumpadAdd', '+'],
    ['NumpadSubtract', '-'],
    ['NumpadMultiply', '*'],
    ['NumpadDivide', '/'],
    ['NumpadEnter', '='],
    ['Backspace', '←'],
    ['Delete', 'C'],
]);

export const LAYOUT_KEYS = [
    {
        id: 1,
        row: [
            {id: 'delete', label: 'C'},
            {id: 'backspace', label: '←'},
            {id: 'percentage', label: '%'},
            {id: 'divide', label: '/', type: 'operator'},
        ],
    },
    {
        id: 2,
        row: [
            {id: 'seven', label: '7'},
            {id: 'eight', label: '8'},
            {id: 'nine', label: '9'},
            {id: 'multiply', label: '*', type: 'operator'},
        ],
    },
    {
        id: 3,
        row: [
            {id: 'four', label: '4'},
            {id: 'five', label: '5'},
            {id: 'six', label: '6'},
            {id: 'subtract', label: '-', type: 'operator'},
        ],
    },
    {
        id: 4,
        row: [
            {id: 'one', label: '1'},
            {id: 'two', label: '2'},
            {id: 'three', label: '3'},
            {id: 'plus', label: '+', type: 'operator'},
        ],
    },
    {
        id: 5,
        row: [
            {id: 'zero', label: '0'},
            {id: 'dot', label: '.'},
            {id: 'equal', label: '=', type: 'large'},
        ],
    },
];

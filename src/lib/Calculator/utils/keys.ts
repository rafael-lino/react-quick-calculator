export function IsNumberOrAllowedKey(key: string): boolean {
    return !isNaN(Number(key)) || ALLOWED_KEYS.includes(key);
}
export const ALLOWED_KEYS = ['Enter', 'Backspace', 'Delete', '=', '-', '+', '*', '/', '%', '.'];

export const operators = ['+', '-', '*', '/'];

export const LAYOUT_KEYS = [
    {
        id: 'first',
        cols: [
            {id: 'delete', label: 'C', value: 'Delete', color: 'qc-controls__item--darker'},
            {id: 'posNeg', label: '+/-', value: 'posNeg', color: 'qc-controls__item--darker'},
            {id: 'percentage', label: '%', value: '%', color: 'qc-controls__item--darker'},
            {id: 'divide', label: '/', value: '/', color: 'qc-controls__item--orangeLight'},
        ],
    },
    {
        id: 'second',
        cols: [
            {id: 'seven', label: '7', value: '7'},
            {id: 'eight', label: '8', value: '8'},
            {id: 'nine', label: '9', value: '9'},
            {id: 'multiply', label: '*', value: '*', color: 'qc-controls__item--orangeLight'},
        ],
    },
    {
        id: 'third',
        cols: [
            {id: 'four', label: '4', value: '4'},
            {id: 'five', label: '5', value: '5'},
            {id: 'six', label: '6', value: '6'},
            {id: 'subtract', label: '-', value: '-', color: 'qc-controls__item--orangeLight'},
        ],
    },
    {
        id: 'fourth',
        cols: [
            {id: 'one', label: '1', value: '1'},
            {id: 'two', label: '2', value: '2'},
            {id: 'three', label: '3', value: '3'},
            {id: 'plus', label: '+', value: '+', color: 'qc-controls__item--orangeLight'},
        ],
    },
    {
        id: 'fifth',
        cols: [
            {id: 'zero', label: '0', value: '0'},
            {id: 'dot', label: '.', value: '.'},
            {id: 'backspace', label: '←', value: 'Backspace'},
            {id: 'equal', label: '=', value: '=', color: 'qc-controls__item--orangeMedium'},
        ],
    },
];

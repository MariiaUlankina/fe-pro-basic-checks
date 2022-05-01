/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((item) => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString (string) {
    let result = '';
    string = string.toLowerCase();
    for (let i = 0; i <string.length; i++){
        if (i % 2 !== 0){
            result += string[i].toUpperCase();
            continue;
        }
        result += string[i];
    }
    return result;
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    let result = ''
    if (action === 'uppercase'){
        result = string.toUpperCase();
    } else if (action === 'lowercase'){
        result = string.toLowerCase();
    }else if (action === 'capitalize'){
        result = capitalizeString(string);
    } else if (action === 'fence'){
        result = fenceString(string);
    } else result = string;
    return result;
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action,string) =>{
    let result = '';
    switch (action){
        case 'uppercase': result = string.toUpperCase();
         break;
        case 'lowercase': result = string.toLowerCase();
        break;
        case 'capitalize': result = capitalizeString(string);
        break;
        case 'fence': result = fenceString (string)
        break;
        default: result = string;
    }
    return result;
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let i of string){
        console.log (i);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i< string.length; i++){
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while ( i < string.length){
        console.log (string[i]);
        i++;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    return string.split('').forEach((item) => console.log(item));
};

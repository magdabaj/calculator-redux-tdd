export const keypadKeys = [
    ['c', '%', 'Del', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0','x^2','√', '.','='],
];

export default (expression) => {

    const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression);

    if (!matched) {
        return 0;
    }

    if (/^[*+\/]/.test(expression)){
        return () => {
            throw new Error('Cannot start the expression with invalid operators')
        }
    }

    return new Function(`return ${matched[0]}`)()
}
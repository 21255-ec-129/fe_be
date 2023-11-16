import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const getNum = (val) => {
        if (val === '=') {
            setResult(eval(result));
        } else {
            setResult(result + val);
        }
    };

    const clearAll = () => {
        setResult('');
    };

    return (
        <center>
            <h2>Calculator</h2>
            <table border={"2px"} cellSpacing="0" cellPadding="6" style={{ width: '400px', height: '200px' }}>
                <tr>
                    <td colSpan="4">{result}</td>
                </tr>
                <tr>
                    <td onClick={() => getNum('9')}>9</td>
                    <td onClick={() => getNum('8')}>8</td>
                    <td onClick={() => getNum('7')}>7</td>
                    <td onClick={() => getNum('/')}>/</td>
                </tr>
                <tr>
                    <td onClick={() => getNum('6')}>6</td>
                    <td onClick={() => getNum('5')}>5</td>
                    <td onClick={() => getNum('4')}>4</td>
                    <td onClick={() => getNum('*')}>*</td>
                </tr>
                <tr>
                    <td onClick={() => getNum('3')}>3</td>
                    <td onClick={() => getNum('2')}>2</td>
                    <td onClick={() => getNum('1')}>1</td>
                    <td onClick={() => getNum('-')}>-</td>
                </tr>
                <tr>
                    <td onClick={() => getNum('0')}>0</td>
                    <td onClick={clearAll}>c</td>
                    <td onClick={() => getNum('=')}>=</td>
                    <td onClick={() => getNum('+')}>+</td>
                </tr>
 
            </table> 
        </center> 
    );
};

export default Calculator;

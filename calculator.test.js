//import { expect ,test } from '@jest/globals';
//import * as Calculator from './Calculator.js';
const calculator = require('./calculator');

test("testando soma de 1+1", () =>{
    expect(calculator.soma(1,1)).toBe(2);
});
test("testando divisao de 2/1", () =>{
    expect(calculator.divisao(2,1)).toBe(2);
})
test("testando multiplicacao de 1*1", () =>{
    expect(calculator.multiplicacao(1,1)).toBe(1);
})
test("testando subt de 2-1", () =>{
    expect(calculator.subtracao(2,1)).toBe(1);
})

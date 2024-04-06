//*Cálculo de Juros:*/
//*Declare uma constante capital com o valor do capital inicial.*/
//*Declare uma constante taxa com o valor da taxa de juros em porcentagem.*/
//*Declare uma constante tempo com o valor do tempo de aplicação em meses.*/
//*Calcule o montante utilizando a fórmula: montante = capital * (1 + taxa/100) ^ tempo.*/
//*Imprima o montante utilizando concatenação de textos.*/

const capital1 = 2000;
const taxa1 = 4;
const tempo1 = 6;
const montante1 = capital1 * (1 + taxa1/100) ^ tempo1;
const result1 = "Montante = a? " + montante1;
const capital2 = 4500;
const taxa2 = 5;
const tempo2 = 12;
const montante2 = capital2 * (1 + taxa2/100) ^ tempo2;
const result2 = "Montante = a? " + montante2;
const capital3 = 8000;
const taxa3 = 2;
const tempo3 = 8;
const montante3 = capital3 * (1 + taxa3/100) ^ tempo3;
const result3 = "Montante = a? " + montante3;

console.log(result1);
console.log(result2);
console.log(result3);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {

  firstNumber: number = null;
  currentNumber: string = '0';
  chosenOperator: string = null;
  stateOfCalculation: boolean = false; // torna-se false qd a proxima tecla carregada nao e numero, mas um operador ou '.'


  constructor() { }

  ngOnInit(): void {
  }

  resetCalculation() {
    this.firstNumber = null;
    this.currentNumber = '0';
    this.chosenOperator = null;
  }

  getChosenNumber(num: string) {
    console.log(num);

    if(this.stateOfCalculation) {
      this.currentNumber = num;
      this.stateOfCalculation = false; // no sentido em que, a seguir, vira uma operacao
    } else {
      this.currentNumber === '0' ? this.currentNumber = num : this.currentNumber += num; // para concatenar numeros escolhidos da calc. como sao strings, '1' + '1' = '11'
    }
  }

  setDecimalNumber() {
    if(this.currentNumber.includes('.') === false) {
      this.currentNumber += '.'; //concatenar '.' ao numero para o tornar decimal
    }
  }

  getOperator(operator: string) {
    if(this.firstNumber === null) {
      this.firstNumber = Number(this.currentNumber);
    } else if(this.chosenOperator !== null) { // 
      this.firstNumber = this.executeCalculation(this.chosenOperator, Number(this.currentNumber));
      this.currentNumber = String(this.firstNumber);
    }
    this.stateOfCalculation = true; // para continuar o calculo, isto e, o anterior caracter foi um operador e nao um numero
    this.chosenOperator = operator;
  }

  getTrigonometricFunction(trig: string) {

  }

  calculateLogN(number: string) {

  }

  executeCalculation(operator: string, num: number) {
    switch(operator) {
      case '+':
        return this.firstNumber += num;
      case '-':
        return this.firstNumber -= num;
      case '*':
        return this.firstNumber *= num;
      case '/':
        return this.firstNumber /= num;
      case '=':
        return num;
      case '^':
        return Math.pow(this.firstNumber, num);
      case 'sqrt':
        return Math.pow(Number(this.firstNumber), 0.5);
    }
  }

}

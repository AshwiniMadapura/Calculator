
// const displayContainer = document.getElementById('display')
// document.querySelectorAll('.buttonDesign').forEach((item) => {
    
//   item.addEventListener('click', (e) => {
//     e.preventDefault();
//     displayContainer.innerHTML = e.target.textContent.trim();
//     console.log(displayContainer);
//   })
// })



// class Calculator{
//     constructor(previousOperandTextElement,currentOperandTextElement){
//         this.previousOperandTextElement=previousOperandTextElement
//         this.currentOperandTextElement=currentOperandTextElement
//         this.clear()
//     }

//     clear(){
//         this.currentOperand=''
//         this.previousOperand=''
//         this.operation= undefined
//     }

//     delete(){
//         this.currentOperand = this.currentOperand.toString().slice(0, -1)
//     }
//     appendNumber(number){
//         if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//     }

//     chooseOperation(operation){
//         if (this.currentOperand === '') return
//     if (this.previousOperand !== '') {
//       this.compute()
//     }
//     this.operation = operation
//     this.previousOperand = this.currentOperand
//     this.currentOperand = ''
//     }
//     compute(){
//         let computation
//     const prev = parseFloat(this.previousOperand)
//     const current = parseFloat(this.currentOperand)
//     if (isNaN(prev) || isNaN(current)) return
//     switch (this.operation) {
//       case '+':
//         computation = prev + current
//         break
//       case '-':
//         computation = prev - current
//         break
//       case '*':
//         computation = prev * current
//         break
//       case '÷':
//         computation = prev / current
//         break
//       default:
//         return
//     }
//     this.currentOperand = computation
//     this.operation = undefined
//     this.previousOperand = ''
//     }

//     updateDisplay(){
//         this.currentOperandTextElement.innerText =
//       this.getDisplayNumber(this.currentOperand)
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     } else {
//       this.previousOperandTextElement.innerText = ''
//     }
//     }
// }


// const numberButtons= document.querySelectorAll('[data-number]')
// const operationButtons=document.querySelectorAll('[data-operation]')
// const equalButtons=document.querySelector('[data-equals]')
// const deleteButtons=document.querySelector('[data-delete]')
// const allClearButtons=document.querySelector('[data-allClear]')
// const previousOperandTextElement=document.querySelector('[data-previous-operand]')
// const currentOperandTextElement=document.querySelector('[data-current-operand]')

// const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

// numberButtons.forEach(button=>{
//     button.addEventListener('click',()=>{
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       calculator.chooseOperation(button.innerText)
//       calculator.updateDisplay()
//     })
//   })
  
// equalButtons.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
//   })

//   allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
//   })
//   deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
//   })
  
//   getDisplayNumber(number) {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay
//     if (isNaN(integerDigits)) {
//       integerDisplay = ''
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`
//     } else {
//       return integerDisplay
//     }
//   }
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
class Calculator {
  
  constructor(previousOperand,currentOperand)
  {
    this.previousOperand=previousOperand;
    this.currentOperand=currentOperand;
    this.clear();
  }

  clear()
  {
    this.prevoperand="";
    this.curroperand="";
    this.operator="";
    this.topele="";
  }

  appendNum(number)  
  {
    this.curroperand=this.curroperand.toString() + number.toString();
    this.topele="0";
  }
  updateScreen()
  {      
      this.currentOperand.innerText=this.curroperand.toString();
      this.previousOperand.innerText=this.prevoperand.toString();
  }
  appendoperator(symbol)
  {
    this.operator=this.operator.toString()+symbol.toString();
    this.prevoperand=this.curroperand.toString();
    this.curroperand="";
    this.topele="1";
  }
  evaluate(){
      let a=parseFloat(this.prevoperand.toString());
      let b=parseFloat(this.curroperand.toString());
      let symbol=this.operator.toString();
      if(symbol=="+")
      {
       a=a+b;
       
      }
      if(symbol=="-")
      {
        a=a-b;
        
      }
      if(symbol=="X")
      {
        a=a*b;
      }
      if(symbol=="%")
      {
        a=a/100;

      }
      if(symbol=="/")
      {
        a=a/b;
      }

      this.curroperand=a.toFixed(3).toString();
      this.prevoperand="";
  }

  dltlast()
  {
    if(this.topele=="0")
    {
      var str=this.curroperand.toString();
      str=str.substring(0,str.length-1);
      this.curroperand=str;
    }
    if(this.topele=="1")
    {
      this.curroperand=this.prevoperand;
      this.prevoperand="";
      this.topele="0";
    }
  }


  
}

const numberbtn=document.querySelectorAll(".num");

const operators=document.querySelectorAll(".symbol");

const equalto=document.querySelector(".equal");

const allclear=document.querySelector(".AC");

const dlt=document.querySelector(".Del");

const previousOperand=document.querySelector(".previous");

const currentOperand=document.querySelector(".current");

const calc = new Calculator(
  previousOperand,currentOperand
  );

numberbtn.forEach((button)=>{
    button.addEventListener("click",()=>{
        calc.appendNum(button.innerText);
        calc.updateScreen();
    })
})

operators.forEach((btn)=>{
  btn.addEventListener("click",()=>
  {
   calc.appendoperator(btn.innerText);
   calc.updateScreen();
  })
})

equalto.addEventListener("click",()=>
{
   calc.evaluate();
   calc.updateScreen();
})

allclear.addEventListener("click",()=>
{
  calc.clear();
  calc.updateScreen();
})

dlt.addEventListener("click",()=>
{
  calc.dltlast();
  calc.updateScreen();
})



















// class Calculator {
//   //    string previousOperandTextElement;
//   //    string currentOperandTextElement;
//   //    string currentOperand;
//   //    string previousOperand;
//   //    string operation

//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//   }
     
//   clear(){
//     this.currentOperand="";
//     this.previousOperand="";
//     this.operation=undefined;
//   }

//   delete(){
//     this.currentOperand=this.currentOperand.toString().slice(0,-1);
//   }

//   appendNumber(number) {
//     if (number == "." && this.currentOperand.includes(".")) return;
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }


//   compute(){
//     let computation;
//     const prev = parseFloat(this.previousOperand);
//     const current = parseFloat(this.currentOperand);

//     switch(this.operation){
//         case "+":
//             computation = prev+current;
//             break;
//         case "-" :
//             computation = prev-current;
//             break;
//         case "*":
//             computation = prev*current;
//             break;
//         case "÷":
//             computation = prev/current;
//             break;
//         default:
//             return;
//     }

//     this.currentOperand = computation;
//     this.operation = undefined;
//     this.previousOperand="";
//   }


//   chooseOperation(operation) {
//     if(this.currentOperand==="")return;
//     if(this.previousOperand!==""){
//         this.compute();
//     }
//     this.operation = operation;
//     this.previousOperand=this.currentOperand;
//     this.currentOperand="";
//   }

//   getDisplayNumber(number){
//     const stringNumber = number.toString();
//     const integerDigit = parseFloat(stringNumber.split(".")[0]);
//     const decimalDigit = stringNumber.split(".")[1];

//     let integerDisplay;

//     if(isNaN(integerDigit))integerDisplay="";
//     else{
//     integerDisplay = integerDigit.toLocaleString("en",{maximumFractionDigits:0});
//     }
//     if(decimalDigit!=null){
//         return `${integerDisplay}.${decimalDigit}`;
//     }
//     else{
//         return integerDisplay;
//     }

//   }


//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.getDisplayNumber(
//       this.currentOperand
//     );

//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         this.getDisplayNumber(this.previousOperand) + " " + this.operation;
//     } else {
//       this.previousOperandTextElement.innerText = "";
//     }
//   }
// }


// const numberButtons = document.querySelectorAll("[data-number]");

// const operationButtons = document.querySelectorAll("[data-operation]");

// const equlsButton = document.querySelector("[data-equals]")

// const deleteButton = document.querySelector("[data-delete]");

// const allClearButton = document.querySelector("[data-all-clear]");

// const previousOperandTextElement = document.querySelector("[data-previous-operand]");

// const currentOperandTextElement = document.querySelector("[data-current-operand]");

// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );

// numberButtons.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener("click",()=>{
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     })
// })

// equlsButton.addEventListener("click",()=>{
//     calculator.compute();
//     calculator.updateDisplay();
// })

// allClearButton.addEventListener("click",()=>{
//     calculator.clear();
//     calculator.updateDisplay();
// })

// deleteButton.addEventListener("click",()=>{
//     calculator.delete();
//     calculator.updateDisplay();
// })


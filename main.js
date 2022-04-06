const numButtons=document.querySelectorAll(".buttonDesign")
        numButtons.forEach(item=>{
            item.addEventListener("click",clickNumber);
    })

const opeButtons=document.querySelectorAll(".operator")
    opeButtons.forEach(item=>{
        item.addEventListener("click",clickOperator);
})

const eqButton=document.querySelectorAll(".eqOperator")
    eqButton.forEach(item=>{
        item.addEventListener("click",performOperation);
})

let numberArray = []
let flag1=true

function clickNumber(){
    if(flag1==true){
        document.getElementById("result").value+=this.value;
        if(numberArray.length==0){ 
                numberArray[0]=this.value;
            }
        else{
            if(this.value == "."){
                let newVal=numberArray[numberArray.length-1]+this.value;
                numberArray[numberArray.length-1]=newVal;       
            }
            else if(this.value == "+-"){
                let newVal=0 - numberArray[numberArray.length-1];
                // console.log(newVal)
                // console.log(typeof(newVal))
                numberArray[numberArray.length-1]=newVal;       
                }
            else{
                let newVal=numberArray[numberArray.length-1]+this.value;
                numberArray[numberArray.length-1]=Number(newVal);
                }
            }
    } 
    else if(flag1==false){
        document.getElementById("result").value+=this.value;
        numberArray.push(Number(this.value))
        flag1=true;
    }
    console.log(numberArray);
    
}

let operatorArray = []    
function clickOperator(){
    flag1=false;
    document.getElementById("result").value+=this.value;
    operatorArray.push(this.value)
    console.log(operatorArray)
}

function performOperation(){
    let totalValue = numberArray[0];
    console.log(numberArray)
    for(i=0;i<numberArray.length-1;i++){
        if (operatorArray[i] == "+"){
            totalValue = totalValue + numberArray[i+1];
        }
        else if(operatorArray[i] == "-"){
            totalValue = totalValue - numberArray[i+1];
        }
        else if(operatorArray[i]=="*"){
            totalValue = totalValue * numberArray[i+1];
        }
        else if(operatorArray[i]=="/"){
            totalValue = totalValue / numberArray[i+1];
        }
    }

    if(operatorArray[i]=="%"){
        totalValue = totalValue / 100;
    }
    document.getElementById("result").value = totalValue;
    console.log(totalValue)
}
let clear=document.getElementById("clear").addEventListener("click",()=>{
    if(document.getElementById("result").value="AC"){
    document.getElementById("result").value="";
    numberArray=[];
    operatorArray=[];
    console.log(numberArray)  
}
})
const numButtons=document.querySelectorAll(".buttonDesign")
        numButtons.forEach(item=>{
            item.addEventListener("click",clickNumber);
    })

const opeButtons=document.querySelectorAll(".operator")
    opeButtons.forEach(item=>{
        item.addEventListener("click",clickOperations);
})

const eqButton=document.querySelectorAll(".eqOperator")
    eqButton.forEach(item=>{
        item.addEventListener("click",evalFunc);
})

// const clearButton=document.getElementById("clear")
//     clearButton.forEach(item=>{
//     item.addEventListener("click",clickClear);
//     })

// function clickClear(){
//     document.getElementById("result").value="";
// }

let clear=document.getElementById("clear")
clear.addEventListener("click",()=>{
    document.getElementById("result").value="";
})

let num_array = []
let flag1=true

function clickNumber(){
    // if(this.value=="AC"){
    //     document.getElementById("result").value="";
    // }
    
    if(flag1==true){
        document.getElementById("result").value+=this.value;
        if(num_array.length==0){ 
                num_array[0]=this.value;
            }
        else{
            if(this.value == "."){
                let newVal=num_array[num_array.length-1]+this.value;
                num_array[num_array.length-1]=newVal;       
            }
            else if(this.value == "+-"){
                let newVal=0 - num_array[num_array.length-1];
                console.log(newVal)
                console.log(typeof(newVal))
                num_array[num_array.length-1]=newVal;       
                }
            else{
                let newVal=num_array[num_array.length-1]+this.value;
                num_array[num_array.length-1]=Number(newVal);
                }
            }
    }
    else if(flag1==false){
        document.getElementById("result").value+=this.value;
        num_array.push(Number(this.value))
        flag1=true;
    }
    
}

let oper_array = []    
function clickOperations(){
    flag1=false;
    document.getElementById("result").value+=this.value;
    oper_array.push(this.value)
}

function evalFunc(){
    let totalValue = num_array[0];
    console.log(num_array)
    for(i=0;i<num_array.length-1;i++){
        if (oper_array[i] == "+"){
            totalValue = totalValue + num_array[i+1];
        }
        else if(oper_array[i] == "-"){
            totalValue = totalValue - num_array[i+1];
        }
        else if(oper_array[i]=="*"){
            totalValue = totalValue * num_array[i+1];
        }
        else if(oper_array[i]=="/"){
            totalValue = totalValue / num_array[i+1];
        }
    }

    if(oper_array[i]=="%"){
        totalValue = totalValue / 100;
    }
    document.getElementById("result").value = totalValue;
}
        
// const buttons=document.querySelectorAll(".buttonDesign")
//         buttons.forEach(item=>{
//             console.log(typeof(item.type));
//             item.addEventListener("click",clickNumber);
            

//     })
//     let addFlag=false;
//     let subFlag=false;
//     let equalFlag=false;
//     document.getElementById("plus").addEventListener("click",addtwoNum);
//     document.getElementById("subtract").addEventListener("click",subtwoNum);
   
//     const equalfunc=()=>{
//         if(addFlag==true){
//             equalFlag=true;
//             addtwoNum()
//         }
//         if(subFlag==true){
//             equalFlag=true;
//             subtwoNum()
//         }
//         document.getElementById("result").value=document.getElementById("result").value
//         console.log(document.getElementById("result").value)
//     }
//     document.getElementById("equal").addEventListener("click",equalfunc);
    
    
//     // /const equalfunc=()=>{
    
//     function clickNumber(){
//         document.getElementById("result").value+=this.value;
//     }

   

//     function addtwoNum()
//     {
//         if(equalFlag==false){
//             addFlag=true
//             document.getElementById("result").value+= this.value
//         }   
//         else if(equalFlag==true){
//             let sumTemp=0;
//             for(let i=0;i<document.getElementById("result").value.length;i++){
//                 const parsval=parseInt(document.getElementById("result").value[i])
//                 if(isNaN(parsval)){    
//                 }
//                 else{
//                     sumTemp+= parseInt(document.getElementById("result").value[i])   
//                 }
//             }
//             document.getElementById("result").value=sumTemp;
    
//         }
//     }
    
//     function subtwoNum()
//     {
//         if(equalFlag==false){
//             subFlag=true
//             document.getElementById("result").value+= this.value
//         }   
//         else if(equalFlag==true){
//             let sumTemp=0;
//             for(let i=0;i<document.getElementById("result").value.length;i++){
//                 console.log(i)
//                 const parsval=parseInt(document.getElementById("result").value[i])
//                 if(isNaN(parsval)){    
//                 }
//                 else{
//                     if(sumTemp==0){
//                         sumTemp=parseInt(document.getElementById("result").value[i]);   
//                     }
//                     else{
//                     sumTemp -= parseInt(document.getElementById("result").value[i])   
//                     console.log(sumTemp);
//                 }
//                 }
//             }
//             document.getElementById("result").value=sumTemp;
//     }
//     }







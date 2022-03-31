const buttons=document.querySelectorAll(".buttonDesign")
        buttons.forEach(item=>{
            console.log(typeof(item.type));
            item.addEventListener("click",clickNumber);
            

    })
 

// document.getElementById("1").addEventListener("click", clickNumber);
// document.getElementById("2").addEventListener("click",clickNumber);
// document.getElementById("3").addEventListener("click",clickNumber);
// document.getElementById("4").addEventListener("click",clickNumber);
// document.getElementById("5").addEventListener("click",clickNumber);
// document.getElementById("6").addEventListener("click",clickNumber);
// document.getElementById("7").addEventListener("click",clickNumber);
// document.getElementById("8").addEventListener("click",clickNumber);
// document.getElementById("9").addEventListener("click",clickNumber);
// document.getElementById("0").addEventListener("click",clickNumber);
document.getElementById("plus").addEventListener("click",addtwoNum);
document.getElementById("subtract").addEventListener("click",subtwoNum);

document.getElementById("equal").addEventListener("click",equalfunc);
let addFlag=false;
let subFlag=false;
let equalFlag=false;

// const equalfunc=()=>{
function equalfunc(){
    if(addFlag==true){
        equalFlag=true;
        addtwoNum()
    }
    if(subFlag==true){
        subtwoNum()
    }
    document.getElementById("result").value=document.getElementById("result").value
    console.log(document.getElementById("result").value)
}
function clickNumber(){
    document.getElementById("result").value+=this.value;
}

function addtwoNum()
{
    if(equalFlag==false){
        addFlag=true
        document.getElementById("result").value+= this.value
    }
    

    else if(equalFlag==true){
        let sumTemp=0;
        for(let i=0;i<document.getElementById("result").value.length;i++){
            const parsval=parseInt(document.getElementById("result").value[i])
            if(isNaN(parsval)){    
            }
            else{
                sumTemp+= parseInt(document.getElementById("result").value[i])   
            }
        }
        document.getElementById("result").value=sumTemp;

    }
}

function subtwoNum()
{
    if(document.getElementById("result").value[1]==null){
        subFlag=true
        document.getElementById("result").value+= this.value
    }
    else if(document.getElementById("result").value[0] !=null && document.getElementById("result").value[2]!=null ){
        document.getElementById("result").value=parseInt(document.getElementById("result").value[0])-parseInt(document.getElementById("result").value[2])
        console.log(document.getElementById("result").value) 
    }
}

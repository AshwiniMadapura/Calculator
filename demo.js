const buttons=document.querySelectorAll("button")
    
        buttons.forEach(item=>{
            item.addEventListener("click",clickNumber);

    })
 
document.getElementById("plus").addEventListener("click",addtwoNum);
document.getElementById("subtract").addEventListener("click",subtwoNum);

document.getElementById("equal").addEventListener("click",equalfunc);
let addFlag=false;
let subFlag=false;

const equalfunc=()=>{
    if(addFlag==true){
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
    if(document.getElementById("result").value[1]==null){
        addFlag=true
        document.getElementById("result").value+= this.value
    }
    else if(document.getElementById("result").value[0] !=null && document.getElementById("result").value[2]!=null ){
    document.getElementById("result").value=parseInt(document.getElementById("result").value[0])+parseInt(document.getElementById("result").value[2])
    console.log(document.getElementById("result").value) 
    // parseInt(document.getElementById("3").value[1])+parseInt(document.getElementById("3").value[0])

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

let ulist=document.getElementById("ulist")
let inp=document.getElementById("inp")



function addItem()
{   if(inp.value==="")
{
    alert("Kindly write something to add")
    
}
   
    
    else 
    {
        let item=document.createElement("li")
        item.innerText=inp.value;
        ulist.appendChild(item);

        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        item.appendChild(span)
        inp.value=""
        saveLocally()
    }
   
}


ulist.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveLocally()
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveLocally()
    }
})


function saveLocally(){
    localStorage.setItem("data",ulist.innerHTML)
}

function showLocalData(){
    ulist.innerHTML=localStorage.getItem("data");
}

showLocalData()
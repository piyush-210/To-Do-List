var inputarea=document.getElementById("input-area");

var count=3;
window.onload=inputarea.focus();


inputarea.addEventListener("keyup",function(e){
    if(e.code=="Enter" && inputarea.value!="")
    {
        count++;

        var task=document.createElement("div");
        task.setAttribute("class","task");
        
        var input=document.createElement("input");
        input.setAttribute("id","text-"+count);
        input.setAttribute("name","val");
        input.setAttribute("type","text");
        input.setAttribute("class","list");
        input.spellcheck=false;
        input.disabled=true;
        input.value=inputarea.value;
        task.appendChild(input);
        
        var icon=document.createElement("i");
        icon.setAttribute("class","fas fa-trash-alt");
        icon.setAttribute("id","delete-"+count);
        task.appendChild(icon);

        icon=document.createElement("i");
        icon.setAttribute("class","fas fa-check com");
        icon.setAttribute("id","check-"+count);
        task.appendChild(icon);

        icon=document.createElement("i");
        icon.setAttribute("class","fa fa-plus-circle com");
        icon.setAttribute("id","edit-"+count);
        task.appendChild(icon);

        icon=document.createElement("i");
        icon.setAttribute("class","fas fa-arrow-down com");
        icon.setAttribute("id","down-"+count);
        task.appendChild(icon);

        icon=document.createElement("i");
        icon.setAttribute("class","fas fa-arrow-up com");
        icon.setAttribute("id","up-"+count);
        task.appendChild(icon);

        var notdone=document.getElementsByClassName("notdone")[0];

        notdone.appendChild(task);

        inputarea.value="";

    }
});

var notdone=document.getElementsByClassName("notdone");
var complete=document.getElementsByClassName("complete");
notdone[0].onclick=function(e){
    if(e.srcElement.id.includes("delete"))
    {
        var parent=document.getElementById(e.srcElement.id).parentNode;
        parent.parentNode.removeChild(parent);

        var container1=notdone[0].querySelectorAll("div");

        if(container1.length==0)
        {
            alert("Yuppy, you don't have any task to do");
        }

    }

    if(e.srcElement.id.includes("check"))
    {
        var element=document.getElementById(e.srcElement.id);
        var parent=element.parentNode;
        parent.getElementsByClassName("com")[0].style.display="none";
        parent.getElementsByClassName("com")[1].style.display="none";
        parent.getElementsByClassName("com")[2].style.display="none";
        parent.getElementsByClassName("com")[3].style.display="none";
        parent.parentNode.removeChild(parent);
        complete[0].appendChild(parent);


        var container1=notdone[0].querySelectorAll("div");
        
        if(container1.length==0 || container1.length==null)
        alert("Yuppy😊, you don't have any task to do");
    }

    if(e.srcElement.id.includes("edit"))
    {
        var element=document.getElementById(e.srcElement.id);
        var parent=element.parentNode;
        var input=parent.getElementsByClassName("list")[0];
        input.disabled=false;
        input.focus();
        var prev=input.value;
        var check=setInterval(function(){


            if(input === document.activeElement){

            }
            else
            {
                if(input.value=="")
                {
                    input.value=prev;
                }

                input.disabled=true;
            }
        },1000);
    }

    if(e.srcElement.id.includes("up"))
    {
        var element=document.getElementById(e.srcElement.id).parentNode;
        console.log(element.parentNode);
        if(element.previousElementSibling && element.previousElementSibling!=element.parentNode.firstChild)
        {
            element.parentNode.insertBefore(element, element.previousElementSibling);
        }
    }

    if(e.srcElement.id.includes("down"))
    {
        var element=document.getElementById(e.srcElement.id).parentNode;
        if(element.nextElementSibling)
        {
            element.parentNode.insertBefore(element.nextElementSibling, element);
        }
    }
}





complete[0].onclick=function(e){
    if(e.srcElement.id.includes("delete"))
    {
        var parent=document.getElementById(e.srcElement.id).parentNode;
        console.log(parent);
        parent.parentNode.removeChild(parent);
    }
}
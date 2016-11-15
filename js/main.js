document.addEventListener("DOMContentLoaded", init);
var output = document.querySelector("#output");

function init(){             
    try{
    if( localStorage ){
  //add listener to button
//  document.getElementById("btnSave").addEventListener("click", setStorage);
 // showStorage();
        
         document.querySelector("#btnClose").addEventListener("click", function(ev){
  ev.preventDefault();
  /* if the button was a submit button we need to stop the form submitting */

  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".modal").style.display = "none";
  /* Add any code you need to process the contents of the form 
    shown in the modal window */
});
    
    document.querySelector("#btnOpenModal").addEventListener("click", function(ev){
  ev.preventDefault();
  /* if the button was a submit button we need to stop the form submitting */

  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").style.display = "block";
  /* Add any code you need to process the contents of the form 
    shown in the modal window */
});
    
        
}else{
  output.innerHTML = "Sorry but your browser does not support localStorage";
}
} catch(e){
    output.innerHTML = "Sorry but your browser does not support localStorage";
    
    console.log(e);
}
                         
    
    
}

let li= ev.currentTarget.parentElement;
let contactName = li.querySelector("h3").textContent;
for ( var i =0 , len= contacts.length ; i< len ; i++)
if (contacts[i].fullname == contactName){
    
    index = i;
    break;
    
}
}
     
     if (index>-1){
    
    contacts.splice(index, 1);
    
    li.parentElement.removeChild(li);
    
    if (contacts.length >0){
        
        saveContacts();} else {
          localStorage.removeItem("contacts");
            
        }
            
        }
    }
}
}


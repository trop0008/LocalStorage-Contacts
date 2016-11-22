var output = document.querySelector("#output");
// reading and showing the local storage:
function showStorage() {
    // adding default data 
    if(! localStorage.getItem("trop0007")){
    let temp = [{"fullname":"Marjan Tropper","phone":"613-862-7210","email":"trop0008@algonquinlive.com"}];
    temp = JSON.stringify(temp);
    localStorage.setItem("trop0007", temp);
  }
    
   // showForm(false);
  displayStorage();
}
// editing the the content
function editKey(){
    
    
}

// removing the content
function removeKey(){
    
}

// displaying the local storage

function displayStorage(){
  let section = document.getElementById("allData");
  //remove the old list of keys
  section.innerHTML = "";
  let info = localStorage;
  let numKeys = info.length;
  for(prop in info){
    //console.log(prop, info[prop]);
    let div = document.createElement("div");
    div.className = "item";
    let b1 = document.createElement("button");
    b1.textContent = "Edit";
    b1.addEventListener("click", editKey);
    let b2 = document.createElement("button");
    b2.textContent = "Delete";
    b2.addEventListener("click", removeKey);
    let pn = document.createElement("p");
    pn.innerHTML = "Key: <span>" + prop + "</span>";
    div.appendChild(b1);
    div.appendChild(b2);
    div.appendChild(pn);
    //check to see if value is an array
    let val;
    let pv = document.createElement("p");
    div.setAttribute("data-key", prop);
    div.setAttribute("data-val", info[prop] );
      console.log(info[prop]);
    if(info[prop].indexOf("[") > -1){
      val = JSON.parse(info[prop]);
      if( Array.isArray(val) ){
        //add a ul and loop through array to display list items
        pv.innerHTML = "Value: ";
        let ul = document.createElement("ul");
        for(let p in val){
          let li = document.createElement("li");
          li.textContent = val[p];
          ul.appendChild(li);
        }
        pv.appendChild(ul);
      }else{
        pv.innerHTML = "Value: <span>" + info[prop] + "</span>";
      }
    }else{
      val = info[prop];
      pv.innerHTML = "Value: <span>" + info[prop] + "</span>";
    }
    div.appendChild(pv);
    section.appendChild(div);
  }
  //console.dir(localStorage);
}


function init() {
    try {
        if (localStorage) {
            //add listener to button
          //  document.getElementById("btnSave").addEventListener("click", setStorage);
            showStorage();
            document.querySelector("#btnClose").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "none";
                document.querySelector(".modal").style.display = "none";
                /* Add any code you need to process the contents of the form 
                  shown in the modal window */
            });
            document.querySelector("#btnOpenModal").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "block";
                document.querySelector(".modal").style.display = "block";
                /* Add any code you need to process the contents of the form 
                  shown in the modal window */
            });
        }
        else {
            output.innerHTML = "Sorry but your browser does not support localStorage";
        }
    }
    catch (err) {
        output.innerHTML = "Sorry but your browser does not support localStorage";
        console.log(err.message);
    }
}
/*
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

*/
// checking to see if the document is loaded and initiating the functions
document.addEventListener("DOMContentLoaded", init);
var output = document.querySelector("#output");
var checkRemove = false;

// reading and showing the local storage:
function showStorage() {
    // adding default data 
    if (!localStorage.getItem("trop0007")) {
        let temp = [{
            "Id": "Id0"
            , "fullname": "Marjan Tropper"
            , "phone": "613-862-7210"
            , "email": "trop0008@algonquinlive.com"
        }];
        temp = JSON.stringify(temp);
        localStorage.setItem("trop0007", temp);
    }
    // showForm(false);
    displayStorage();
}
// editing the the content
function editKey(ev) {
    let getId = ev.currentTarget.parentElement.id;
    alert("calling edit Key " + getId)
}
// removing the content
function removeKey(ev) {
    let getId = ev.currentTarget.parentElement.id;
    alert("calling remove Key " + getId);
}
// adding content:
function addData() {
    let info = localStorage;
    for (prop in info) {
        //console.log(prop, info[prop]);
        //check to see if value is an array
        let val;
        //  div.setAttribute("data-key", prop);
        // div.setAttribute("data-val", info[prop] );
        //  console.log(info[prop]);
        if (info[prop].indexOf("[") > -1) {
            val = JSON.parse(info[prop]);
            if (Array.isArray(val)) {
               console.log(val.length) 
               console.log(val) 
              console.log(document.getElementById("fullname").value) ;
                
               let myId= "Id"+ val.length;
                let newData = [{
            "Id": myId
            , "fullname": document.getElementById("fullname").value
            , "phone": document.getElementById("phone").value
            , "email": document.getElementById("email").value
        }];
                
              
                newData.forEach(function (item, index) {
                  
                val.push(item);
                console.log(val);
                });
                val=JSON.stringify(val)
                localStorage.setItem("trop0007", val);
                displayStorage();
            }
        }
    }
}
// displaying the local storage
function displayStorage() {
    let section = document.getElementById("allData");
    //remove the old list of keys
    section.innerHTML = "";
    let info = localStorage;
    for (prop in info) {
        //console.log(prop, info[prop]);
        //check to see if value is an array
        let val;
        //  div.setAttribute("data-key", prop);
        // div.setAttribute("data-val", info[prop] );
        //  console.log(info[prop]);
        if (info[prop].indexOf("[") > -1) {
            val = JSON.parse(info[prop]);
            if (Array.isArray(val)) {
                var docfrag = document.createDocumentFragment();
                var indexLength = val.length;
                val.forEach(function (item, index) {
                    myCounter = index;
                    let li = document.createElement("li");
                    li.innerHTML = "<span class='delete' id='span" + item.Id + "'></span><span id='spanedit" + item.Id + "'><h3>" + item.fullname + "</h3><p class='email'>" + item.email + "</p><p class='phone'>" + item.phone + "</p></span>";
                    li.className = "contact";
                    li.id = item.Id;
                    docfrag.appendChild(li);
                });
                section.appendChild(docfrag);
                for (let x = 0; x < indexLength; x++) {
                    let spanDelete = document.getElementById("spanId" + x);
                    console.log(spanDelete);
                    spanDelete.addEventListener("click", removeKey);
                    let spanEdit = document.getElementById("spaneditId" + x);
                    console.log(spanDelete);
                    spanEdit.addEventListener("click", editKey);
                }
            }
        }
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
            document.querySelector("#button-blue").addEventListener("click", function (ev) {
                ev.preventDefault();
                
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "none";
                document.querySelector(".modal").style.display = "none";
                /* Add any code you need to process the contents of the form 
                  shown in the modal window */
                addData();
                //id="addButton"
            });
            
            document.querySelector("#btnOpenModal").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "block";
                document.querySelector(".modal").style.display = "block";
              //  addData();
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
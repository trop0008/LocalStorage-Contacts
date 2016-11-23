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
    if(ev.currentTarget){
    let getId = ev.currentTarget.parentElement.id;
    
    
    let info = localStorage;
    for (prop in info) {
        
        //check to see if value is an array
        let val;
        
        if (info[prop].indexOf("[") > -1) {
            val = JSON.parse(info[prop]);
            if (Array.isArray(val)) {
               
                     
                val.forEach(function (item, index) {
                 if (item.Id== getId ) {
                     console.log(item.Id +" "+ getId);
               val.splice(item,1);
                      val=JSON.stringify(val);
                     
                      
                localStorage.setItem("trop0007", val);
                     console.log(val);
                     
                     let spanDelete = document.getElementById("span" + getId); 
                        spanDelete.removeEventListener("click", removeKey);
                    let spanEdit = document.getElementById("spanedit" + getId);
                    
                    spanEdit.removeEventListener("click", editKey);
                     console.log(spanDelete);
                     console.log(spanEdit);
                     let element = document.getElementById(getId); 
                     element.parentNode.removeChild(element);
                     
                     
                     
                 }
                     
                   
                    
                   
                });
                
               
               
                
            }
        }
    }
    }
    
    
}
// adding content:
function addData() {
    let info = localStorage;
    for (prop in info) {
        
        //check to see if value is an array
        let val;
        
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
                document.querySelector(".overlay").style.display = "none";
                document.querySelector(".modal").style.display = "none";
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
        
        //check to see if value is an array
        let val;
        
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
                    console.log(item);
                });
                section.appendChild(docfrag);
                for (let x = 0; x < indexLength; x++) {
                    let spanDelete = document.getElementById("spanId" + x);
                  
                     console.log(x);
                   
                    if(spanDelete){
                        console.log
                         spanDelete.addEventListener("click", removeKey);
                    }
                    let spanEdit = document.getElementById("spaneditId" + x);
                     if(spanEdit){
                          spanEdit.addEventListener("click", editKey);
                    }
                   
                }
            }
        }
    }
   
}

function init() {
    try {
        if (localStorage) {
            //add listener to button
            showStorage();
            document.querySelector("#btnClose").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "none";
                document.querySelector(".modal").style.display = "none";
                /* Add any code you need to process the contents of the form 
                  shown in the modal window */
            });
           
                document.querySelector(".overlay").style.display = "none";
                document.querySelector(".modal").style.display = "none";
                
            
            document.querySelector("#btnOpenModal").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "block";
                document.querySelector(".modal").style.display = "block";
              
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



// checking to see if the document is loaded and initiating the functions
document.addEventListener("DOMContentLoaded", init);
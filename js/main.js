var output = document.querySelector("#output");
var idCounter = 1;
// reading and showing the local storage:
function showStorage() {
    // adding default data 
    if (!localStorage.getItem("trop0007")) {
        let temp = [{
            "Id": 1
            , "fullname": "Marjan Tropper"
            , "email": "trop0008@algonquinlive.com"
            , "phone": "613-862-7210"
        }];
        temp = JSON.stringify(temp);
        localStorage.setItem("trop0007", temp);
    }
    else {
        let info = localStorage;
        for (prop in info) {
            //check to see if value is an array
            let val;
            let checkId;
            if (info[prop].indexOf("[") > -1) {
                val = JSON.parse(info[prop]);
                if (val.length == 0) {
                    let temp = [{
                        "Id": 1
                        , "fullname": "Marjan Tropper"
                        , "email": "trop0008@algonquinlive.com"
                        , "phone": "613-862-7210"
        }];
                    temp = JSON.stringify(temp);
                    localStorage.setItem("trop0007", temp);
                    idCounter = 0;
                }
            }
        }
    }
    displayStorage();
}
// editing the the content
function editKey(ev) {
    if (ev.currentTarget) {
        let getId = ev.currentTarget.parentElement.id;
        let info = localStorage;
        for (prop in info) {
            //check to see if value is an array
            let val;
            let checkId;
            if (info[prop].indexOf("[") > -1) {
                val = JSON.parse(info[prop]);
                if (Array.isArray(val)) {
                    val.forEach(function (item, index) {
                        checkId = "Id" + item.Id;
                        
                        if (checkId == getId) {
                            document.getElementById("fullnameMod").value = item.fullname;
                            document.getElementById("emailMod").value = item.email;
                            document.getElementById("phoneMod").value = item.phone;
                            document.getElementById("IdMod").value = getId;
                            document.querySelector("#editModal").style.display = "block";
                            document.querySelector(".overlay").style.display = "block";
                        }
                    });
                }
            }
        }
    }
}

function updateKey(ev) {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".overlay").style.display = "block";
    let getId = document.getElementById("IdMod").value;
    if (getId != "") {
        let info = localStorage;
        for (prop in info) {
            //check to see if value is an array
            let val;
            let checkId;
            if (info[prop].indexOf("[") > -1) {
                val = JSON.parse(info[prop]);
                if (Array.isArray(val)) {
                    val.forEach(function (item, index) {
                        checkId = "Id" + item.Id;
                        
                        if (checkId == getId) {
                            let fullname = document.getElementById("fullnameMod").value;
                            let phone = document.getElementById("phoneMod").value;
                            let email = document.getElementById("emailMod").value;
                            item.fullname = fullname;
                            item.email = email;
                            item.phone = phone;
                            val = JSON.stringify(val);
                            localStorage.setItem("trop0007", val);
                           
                            displayStorage();
                            document.querySelector(".overlay").style.display = "none";
                            document.querySelector("#editModal").style.display = "none";
                            
                            
                            document.getElementById("fullnameMod").value = "";
                            document.getElementById("emailMod").value = "";
                            document.getElementById("phoneMod").value = "";
                            document.getElementById("IdMod").value = "";
                        }
                    });
                }
            }
        }
    }
}
// removing the content
function removeKey(ev) {
    document.querySelector(".overlay").style.display = "block";
    if (ev.currentTarget) {
        let getId = ev.currentTarget.parentElement.id;
        let info = localStorage;
        for (prop in info) {
            //check to see if value is an array
            let val;
            let checkId;
            if (info[prop].indexOf("[") > -1) {
                val = JSON.parse(info[prop]);
                if (Array.isArray(val)) {
                    val.forEach(function (item, index) {
                        checkId = "Id" + item.Id;
                        
                        if (checkId == getId) {
                          
                            val.splice(item, 1);
                            val = JSON.stringify(val);
                            localStorage.setItem("trop0007", val);
                            
                            let spanDelete = document.getElementById("span" + getId);
                            spanDelete.removeEventListener("click", removeKey);
                            let spanEdit = document.getElementById("spanedit" + getId);
                            spanEdit.removeEventListener("click", editKey);
                            let element = document.getElementById(getId);
                            element.parentNode.removeChild(element);
                            displayStorage();
                            document.querySelector(".overlay").style.display = "none";
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
                
                idCounter++;
                let fullname = document.getElementById("fullname").value;
                let phone = document.getElementById("phone").value;
                let email = document.getElementById("email").value;
                let itemId = idCounter;
                
                let newData = [{
                    "Id": idCounter
                    , "fullname": fullname
                    , "email": email
                    , "phone": phone
        }];
                newData.forEach(function (item, index) {
                    val.push(item);
                    
                });
                // saving the updated local storage
                val = JSON.stringify(val)
                localStorage.setItem("trop0007", val);
                // adding contact on the html
                let section = document.getElementById("allData");
                let li = document.createElement("li");
                li.innerHTML = "<span class='delete' id='spanId" + idCounter + "'></span><span id='spaneditId" + itemId + "'><h3>" + fullname + "</h3><p class='email'>" + email + "</p><p class='phone'>" + phone + "</p></span>";
                li.className = "contact";
                li.id = "Id" + itemId;
                section.appendChild(li);
                let spanDelete = document.getElementById("spanId" + itemId);
                if (spanDelete) {
                    spanDelete.addEventListener("click", removeKey);
                }
                let spanEdit = document.getElementById("spaneditId" + itemId);
                if (spanEdit) {
                    spanEdit.addEventListener("click", editKey);
                }
                document.querySelector(".overlay").style.display = "none";
                document.querySelector("#modalAdd").style.display = "none";
                document.getElementById("fullname").value = "";
                            document.getElementById("email").value ="";
                            document.getElementById("phone").value = "";
                            
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
                val.forEach(function (item, index) {
                    if (idCounter <= item.Id) {
                        idCounter = item.Id;
                    }
                    let li = document.createElement("li");
                    li.innerHTML = "<span class='delete' id='spanId" + item.Id + "'></span><span id='spaneditId" + item.Id + "'><h3>" + item.fullname + "</h3><p class='email'>" + item.email + "</p><p class='phone'>" + item.phone + "</p></span>";
                    li.className = "contact";
                    li.id = "Id" + item.Id;
                    docfrag.appendChild(li);
                    
                });
                section.appendChild(docfrag);
                for (let x = 0; x <= idCounter; x++) {
                    let spanDelete = document.getElementById("spanId" + x);
                    
                    if (spanDelete) {
                        
                        spanDelete.addEventListener("click", removeKey);
                    }
                    let spanEdit = document.getElementById("spaneditId" + x);
                    if (spanEdit) {
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
            
            document.querySelector("#btnModClose").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "none";
                document.querySelector("#editModal").style.display = "none";
            });
            document.querySelector("#btnClose").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "none";
                document.querySelector("#modalAdd").style.display = "none";
                /* Add any code you need to process the contents of the form 
                  shown in the modal window */
            });
            document.querySelector(".overlay").style.display = "none";
            document.querySelector("#modalAdd").style.display = "none";
            document.querySelector("#editModal").style.display = "none";
            document.querySelector("#btnOpenModal").addEventListener("click", function (ev) {
                ev.preventDefault();
                /* if the button was a submit button we need to stop the form submitting */
                document.querySelector(".overlay").style.display = "block";
                document.querySelector("#modalAdd").style.display = "block";
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
document.addEventListener("DOMContentLoaded", init);


function init(){              
                         
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
    
    
}


(function(){
    "use strict";
    
    var height = document.getElementById("height");
    var femur = document.getElementById("femur");
    

    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("squatform").addEventListener("submit" , squatCal);
            var calSub = document.getElementById("calculate");
            
            calSub.disabled = true;
            
            height.addEventListener("change", function(){
            
            
            if (height.value === ""){
                calSub.disabled = true;
            } else {
                calSub.disabled = false;
            }
            
         });

            
            calSub.disabled = true;
            
            femur.addEventListener("change" , function (){
                
                if (femur.value === ""){
                calSub.disabled = true;
            } else {
                calSub.disabled = false;
            }
 
                
        });



});


function squatCal(event){
    event.preventDefault();
    
    if(height.value === ""){
        alert("Please enter your height");
        height.focus();
    }
     
    if(femur.value === ""){
        alert("Please enter your femur length");
        femur.focus();
        
    }

    var heightInput = parseInt(document.getElementById("height").value, 10) || 0;
    var femurInput = parseInt(document.getElementById("femur").value, 10) || 0;
    var squatMath = (heightInput * 0.26);      
    var yesSquat = ("It looks like you have a great structure for squatting."),
        noSquat = ("It looks like Low Bar squatting or machine exercises are best for you.");
                    

    if(femurInput <= squatMath){
        
        document.getElementById("textfield").value = yesSquat;
        
    } else if (femurInput > squatMath){
        
        document.getElementById("textfield").value= noSquat;
    }
    
   
}
    

})();

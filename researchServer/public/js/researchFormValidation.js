// place your javascript code here
/* Notice that we are setting the function to call when submit is selected */
window.onsubmit=validateForm;

/* This function must return true or false */
/* If true the data will be sent to the server */
/* If false the data will not be sent to the server */

function validateForm(){
    let error_msg = "";
    error_msg += checkPhoneNumber();
    error_msg += checkCondition();
    error_msg += checkPeriod();
    error_msg += checkStudyId();
    if (error_msg !== "") {
        alert(error_msg);
        return false;
    } else {
        var submit_msg = "Do you want to submit the form data?\n";
        if (window.confirm(submit_msg))
            return true;
        else    
            return false;
    }
}
function checkPhoneNumber(){ 
    let error_msg = "";
    let num1 = document.getElementById("phone1").value;
    let num2 = document.getElementById("phone2").value;
    let num3 = document.getElementById("phone3").value;
    
    if(isNaN(num1) == true || isNaN(num2) == true || isNaN(num3) == true
        || num1.length !== 3 || num2.length !== 3 || num3.length !== 4)
        error_msg = "Invalid phone number.\n";

    return error_msg;
}
function checkCondition(){
    let error_msg = "";
    
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
            values.push(el.value);
        });
    
    if(values.length === 0)
        error_msg = "No condition provided.\n";
    if(values.length > 1 && (values[0] === "none" || values[1] === "none"  || values[2] === "none" 
                                || values[3] === "none" || values[4] === "none"))
        error_msg = "Invalid conditions selection.\n";
    
    return error_msg;
}
function checkPeriod(){
    let error_msg = "";
    
    let time_period1 =document.getElementById("radio1").checked;
    let time_period2 =document.getElementById("radio2").checked;
    let time_period3 =document.getElementById("radio3").checked;
    let time_period4 =document.getElementById("radio4").checked;
    
    //if all radio buttons are unchecked print error message, otherwise (1 of them checked) everything is fine
    if(time_period1 === false && time_period2 === false && time_period3 === false && time_period4 === false  )
        error_msg = "No time period selected.\n";
    
    return error_msg;
}
function checkStudyId(){
    let error_msg = "";
    let  first4digits  = "" + document.getElementById("id1").value;
    let second4digits = ""  + document.getElementById("id2").value;
    let digits1,digits2;

    if(first4digits.length !== 4 || second4digits.length !== 4){ //missing some digit OR  having too many
        error_msg = "Invalid study id.\n";
        return error_msg;
    }
    if (first4digits.charAt(0) !== 'A' || second4digits.charAt(0) !== 'B')
        error_msg = "Invalid study id.\n";

    digits1 = first4digits.slice(1,4);
    digits2 = second4digits.slice(1,4);

    if(isNaN(digits1) === true || isNaN(digits2) === true) //check if after first letter there are only numbers
       error_msg = "Invalid study id.\n";

    return error_msg;
}
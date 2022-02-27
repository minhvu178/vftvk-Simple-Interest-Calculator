function compute()
{
    var principal = document.getElementById("principal").value;
    var valid_deposit = invalid();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var currentDate = new Date().getFullYear();
    var resultYear = Number(currentDate) + Number(years);
    if (valid_deposit) {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of $"+interest+",\<br\>in the year "+resultYear+"\<br\>"
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function invalid()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert ("Enter a positive number");
        if (confirm("OK")){
            document.getElementById("principal").focus();
        }
        return false;
    }
    return true;
}

        
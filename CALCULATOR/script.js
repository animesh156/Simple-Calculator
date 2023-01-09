function valuecal(result){
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}

function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
}

function clr() {
    document.getElementById("result").value="";
}

function drk() {
    var element=document.body;
    element.classList.toggle("dark-mode");
}


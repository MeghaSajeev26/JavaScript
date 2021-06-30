function display_value(num){
    let input_box=document.getElementById("inpt")
    input_box.value+=num
    //+= to concatenate the input we give
}

function evaluate_expression(){
    let current_value=inpt.value
    //to get value in the textbox this method can be used
    let res=eval(current_value)
    inpt.value=res
}

function clear_box(){
    inpt.value=" ";
    //to clear the inpt.value in textbox-- " (empty) "
}

function remove_element(){
    inpt.value=inpt.value.slice(0,-1)
}
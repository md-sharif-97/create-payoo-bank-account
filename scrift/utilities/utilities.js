

function getInputValueById(id){
    const value=document.getElementById(id).value;
    const convertvalue=parseFloat(value);
    return convertvalue;
}


function getInnerTextByID(id){
    const value=document.getElementById(id).innerText;
    const convertvalue = parseFloat(value);
    return convertvalue
}

// function setInnerTextIDandValue(id,value){
//     document.getElementById(id).innerText = value;
// }
    document.getElementById("addMoney").style.display="block";
    document.getElementById("cashout").style.display="none";
    document.getElementById("Transactions-histry").style.display="none";

document.getElementById("add-money-box").addEventListener('click',function(){
    document.getElementById("addMoney").style.display="block";
    document.getElementById("cashout").style.display="none";
    document.getElementById("Transactions-histry").style.display="none";
})

document.getElementById("cashout-box").addEventListener('click',function(){
    document.getElementById("addMoney").style.display="none";
    document.getElementById("cashout").style.display="block";
    document.getElementById("Transactions-histry").style.display="none";
})

document.getElementById("Transactions-histry-box").addEventListener('click',function(){
    document.getElementById("addMoney").style.display="none";
    document.getElementById("cashout").style.display="none";
    document.getElementById("Transactions-histry").style.display="block";
})
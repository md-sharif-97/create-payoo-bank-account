//     document.getElementById('cash-out').addEventListener('click', function (event) {
//     event.preventDefault();
//     const amount = document.getElementById("cashout-amount").value;
//     const convertAmount = parseFloat(amount);
//     const pin = document.getElementById("cashout-pin").value;
//     const convertPin = parseInt(pin);
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertMainBalance = parseFloat(mainBalance);

//     if(convertPin === 1234){
//         const sum = convertMainBalance - convertAmount ;
//         document.getElementById("main-balance").innerText = sum ;
//     }
//     else{
//         console.log('Wrong Pin')
//     }
// })

document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById("cashout-amount");
    const pin = getInputValueById("cashout-pin");
    const account = getInputValueById("Acount-nunber");
    const mainBalance = getInnerTextByID("main-balance");

    if(amount>mainBalance){
        alert("Invalid Balance")
        return;
    }

    if (pin === 1234) {
        const sum = mainBalance - amount;
        document.getElementById("main-balance").innerText = sum;

        // const container = document.getElementById("transaction-container");

        // const p = document.createElement('p')
        // p.innerText = `
        // Cashout ${amount} from this ${account} account
        // `
        // container.appendChild(p)


        const container = document.getElementById("transaction-container");

        const div = document.createElement('div');
        div.classList.add("bg-red-500")
        div.classList.add("p-6")
        div.classList.add("mb-2")
        div.innerHTML=`
        
        <h1>${amount}</h1>
        <p>form ${account} number</p>

        `
        container.appendChild(div)

    }
    else {
        console.log('Wrong Pin')
    }
})
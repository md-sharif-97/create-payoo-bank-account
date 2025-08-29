//     document.getElementById('add-money').addEventListener('click', function (event) {
//     event.preventDefault();
//     const amount = document.getElementById("amount").value;
//     const convertAmount = parseFloat(amount);
//     const pin = document.getElementById("pin").value;
//     const convertPin = parseInt(pin);
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertMainBalance = parseFloat(mainBalance);

//     if(convertPin === 1234){
//         const sum = convertMainBalance + convertAmount ;
//         document.getElementById("main-balance").innerText = sum ;
//     }
//     else{
//         console.log('Wrong Pin')
//     }
// })


document.getElementById("add-money").addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const account = getInputValueById("Acount-nunber");
    const mainBalance = getInnerTextByID("main-balance");
    const selectBank = getInputValueById("allbank").value

    if(amount<0){
        alert('Please input positive number')
        return;
    }

    if (pin === 1234) {
        const sum = mainBalance + amount;
        document.getElementById("main-balance").innerText = sum;
        // getInnerTextByID("main-balance",sum);

        // const container = document.getElementById("transaction-container");

        // const p = document.createElement('p')
        // p.innerText = `
        // added ${amount} from this ${account} account
        // `
        // container.appendChild(p)

        const container = document.getElementById("transaction-container");

        const div = document.createElement('div');
        div.classList.add("bg-red-500")
        div.classList.add("p-6")
        div.classList.add("mb-2")
        div.innerHTML=`
        <h1> Add Money form ${selectBank}</h1>
        <h3>${amount}</h3>
        <p>Account number ${account}</p>

        `
        container.appendChild(div)

       
    }
    else {
        console.log('Wrong Pin')
    }
})
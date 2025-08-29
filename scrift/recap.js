document.getElementById('add-money').addEventListener("click",
    function (event) {
        event.preventDefault();
        const pin = document.getElementById("pin").value;
        const convertPin = parseInt(pin);
        const amount = document.getElementById("amount").value;
        const convertedAmount = parseFloat(amount)
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertMainBalance = parseFloat(mainBalance);

        if (amount && pin) {
            if (convertPin === 1234) {
                const sum = convertMainBalance + convertedAmount;
                document.getElementById("main-balance").innerText = sum;
            }
            else {
                alert('Wrong Pin')
            }
        }
        else {
            alert('enter amount')
        }
    })
document.getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        // console.log(accountNumber);

        const pin = document.getElementById("pin").value;
        const convertPin = parseInt(pin);

        if (accountNumber.length === 11) {
            if (convertPin === 2345) {
                window.location.href = "main.html"
            }
            else {
                alert("Please enter your valid pin number")
            }
        }
        else[
            alert("need valid account number")
        ]

    })
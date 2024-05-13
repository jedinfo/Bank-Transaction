function startTransaction() {
    let insertCard = prompt("Please insert your card by typing yes");

    if (insertCard.toLowerCase() === "yes") {
        let pin = prompt("Please enter your PIN");

        let userAccount = {
            name: "John Doe",
            accountNumber: "1234567890",
            bank: ""
        };

        let action = prompt("Type 1 to withdraw, Type 2 to transfer");

        if (action === "2") {
            let receiverAccountNumber = prompt("Please enter receiver account number");
            let receiverBank = prompt("Please select receiver's bank: UBA, Access, GTB");
            let confirmReceiver = confirm(`Please confirm receiver details:\nName: ${userAccount.name}\nAccount Number: ${receiverAccountNumber}\nBank: ${receiverBank}`);
            
            if (confirmReceiver) {
                let transferAmount = parseFloat(prompt("Please enter transfer amount"));
                let confirmTransfer = confirm(`Are you sure?\nName: ${userAccount.name}\nAccount Number: ${receiverAccountNumber}\nBank: ${receiverBank}\nTransfer Amount: ${transferAmount}`);
                
                if (confirmTransfer) {
                    alert("Transfer successful");
                } else {
                    alert("Transfer cancelled");
                }
            } else {
                alert("Receiver details not confirmed. Transfer cancelled.");
            }
        } else {
            alert("Invalid action. Please select 1 to withdraw or 2 to transfer.");
        }
    } else {
        alert("Card not inserted. Transaction cancelled.");
    }
}

$(document).ready(function() {
    $("#checkout").click(function() {
        validateFields();
    })
})

function validateFields () {
    var nameField = $("#f-name").val(),
        cardNum = $("#cc-no").val(),
        cvvCode = $("#cvv").val();

    var regLetters = (/([^a-zA-Z])/g),
        regNums = (/([^0-9])/g);

    if (nameField === "" || nameField.match(regLetters) !== null) {
        alert("Please enter full name as appeared on card")
    }

    if (cardNum === "" || cardNum.match(regNums) !== null) {
        alert ("Please re-enter credit card number as appeared on card")
    }

    if (cvvCode === "" || cvvCode.match(regNums) !== null) {
        alert ("Please re-enter CVV code as appeared on card")
    }

}
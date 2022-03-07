function CusIdSearch(){
    $("#selectcustomerId").keyup(function (event) {
        searchCustId = $("#selectcustomerId").val();
        if (regCusId.test(searchCustId)) {
            $("#selectcustomerId").css('border', '2px solid green');
            if (event.key == "Enter") {
                var foundOrNot = false;
                let foundCustomer = searchCustomer(searchCustId);
                if (foundCustomer) {
                    $("#pocName").val(foundCustomer.getName());
                    $("#pocaddress").val(foundCustomer.getAddress());
                    $("#pocContact").val(foundCustomer.getContact());
                    $("#pocsalary").val(foundCustomer.getSalary());
                    foundOrNot = true;
                }
                if (foundOrNot == false) {
                    alert("Customer Not Found");
                    $("#pocName").val("");
                    $("#pocaddress").val("");
                    $("#pocContact").val("");
                    $("#pocsalary").val("");
                    $("#btnDeleteCustomer").prop('disabled', true);
                }
            }
        } else {
            $("#txtSearchCId").css('border', '2px solid red');
            $("#searchCustomerIdError").text("Cust ID is a required field.Pattern : C00-001");

        }
    });
}
function OrderIIdSearch() {
    $("#selectItemId").keyup(function (event) {
        searchItemCode = $("#selectItemId").val();
        if (regItemCode.test(searchItemCode)) {
            $("#selectItemId").css('border', '2px solid green');
            if (event.key == "Enter") {
                var foundOrNot = false;
                let foundCustomer = searchItem(searchItemCode);
                if (foundCustomer) {
                    $("#poiName").val(foundCustomer.getName());
                    $("#poitemPrice").val(foundCustomer.getUnitPrice());
                    foundOrNot = true;
                }
                if (foundOrNot == false) {
                    $("#poiName").val("");
                    $("#poitemPrice").val("");
                }
            }
        } else {
            $("#selectItemId").css('border', '2px solid red');
        }
    });
}

$("#btnAddCard").click(function () {
    var qty = $("#poqtyOnHand").val();
    $("#noOfItems").val(qty);
});

function Total() {
    $("#btnAddCard").click(function () {
        var qty = $("#poqtyOnHand").val();
        var uPrice = $("#poitemPrice").val();
        $("#total").val(uPrice * qty);
    });
}

function Balance() {
    var total = $("#total").val();
    var cash = $("#cash").val();
    $("#balance").val(cash - total);
}

/*$("#btnAddItem").click(function () {
    var select = document.getElementById("selectItemcode"),
        txtVal = document.getElementById("txtIcode").value,
        newOption = document.createElement("OPTION"),
        newOptionVal = document.createTextNode(txtVal);

    newOption.appendChild(newOptionVal);
    select.insertBefore(newOption, select.lastChild)
});*/
/*
let customerId = $("#txtCustomerId").val();
var customer = new CustomerIdCombo(customerId);
cusComboDB.push(customer);*/

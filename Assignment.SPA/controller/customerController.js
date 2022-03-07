$(".customerHomeNavi").click(function () {
    $("#carouselExampleIndicators").css('display', 'block');
    $("#customerPage").css('display', 'none');
});

/*Customer Form Text Field Validations*/

let regCusId = /^(C00-)[0-9]{4}$/;
let regCustName = /^[A-z .]{3,}$/;
let regCustAddress = /^[A-z ,.0-9]{3,}$/;
let regCustSalary = /^[1-9][0-9]{3,}([.][0-9]{2})?$/;
let regContact = /^[07]{2}[1-9]{1}[-]?[0-9]{7}$/;
let searchCustId;

// Add Customer Form Validations
$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerContact,#txtCustomerSalary').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerContact,#txtCustomerSalary').on('keydown', function (event) {
    addCustomerFormValidation();
});

$("#txtCustomerId").on('keyup', function (event) {
    setAddCustomerButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddCustomerFormValid();
    }
});

$("#txtCustomerName").on('keyup', function (event) {
    setAddCustomerButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddCustomerFormValid();
    }
});

$("#txtCustomerAddress").on('keyup', function (event) {
    setAddCustomerButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddCustomerFormValid();
    }
});
$("#txtCustomerContact").on('keyup', function (event) {
    setAddCustomerButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddCustomerFormValid();
    }
});
$("#txtCustomerSalary").on('keyup', function (event) {
    setAddCustomerButtonDisableOrNot();
    if (event.key == "Enter") {
        checkIfAddCustomerFormValid();
    }
});
$('#selectcustomerId,#pocName,#pocaddress,#pocsalary').on('keyup',function (){
    CusIdSearch();
});
function addCustomerFormValidation() {
    var custId = $("#txtCustomerId").val();
    $("#txtCustomerId").css('border', '2px solid green');
    $("#customerIdError").text("");
    if (regCusId.test(custId)) {
        var custName = $("#txtCustomerName").val();
        if (regCustName.test(custName)) {
            $("#txtCustomerName").css('border', '2px solid green');
            $("#customerNameError").text("");
            var custAddress = $("#txtCustomerAddress").val();
            if (regCustAddress.test(custAddress)) {
                var custSalary = $("#txtCustomerSalary").val();
                var response = regCustSalary.test(custSalary);
                $("#txtCustomerAddress").css('border', '2px solid green');
                $("#customerAddressError").text("");
                var cusContact = $("#txtCustomerContact").val();
                if (regContact.test(cusContact)) {
                    $("#txtCustomerContact").css('border', '2px solid green');
                    $("#customerContactError").text("");
                    if (response) {
                        $("#txtCustomerSalary").css('border', '2px solid green');
                        $("#customerSalaryError").text("");
                        return true;
                    } else {
                        $("#txtCustomerSalary").css('border', '2px solid red');
                        $("#customerSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
                        return false;
                    }
                } else {
                    $("#txtCustomerContact").css('border', '2px solid red');
                    $("#customerContactError").text("Customer contact is a required field.");
                }
            } else {
                $("#txtCustomerAddress").css('border', '2px solid red');
                $("#customerAddressError").text("Customer address is a required field.");
                return false;
            }
        } else {
            $("#txtCustomerName").css('border', '2px solid red');
            $("#customerNameError").text("Customer name is a required field.");
            return false;
        }
    } else {
        $("#txtCustomerId").css('border', '2px solid red');
        $("#customerIdError").text("Cust ID is a required field.Pattern : C00-0001");
        return false;
    }
}

function setAddCustomerButtonDisableOrNot() {
    let check = addCustomerFormValidation();
    if (check) {
        $("#btnRegisterCustomer").attr('disabled', false);
    } else {
        $("#btnRegisterCustomer").attr('disabled', true);
    }
}

function checkIfAddCustomerFormValid() {
    var custID = $("#txtCustomerId").val();
    if (regCusId.test(custID)) {
        $("#txtCustomerName").focus();
        var custName = $("#txtCustomerName").val();
        if (regCustName.test(custName)) {
            $("#txtCustomerAddress").focus();
            var custAddress = $("#txtCustomerAddress").val();
            if (regCustAddress.test(custAddress)) {
                $("#txtCustomerContact").focus();
                var cusContact = $("#txtCustomerContact").val();
                if (regContact.test(cusContact)) {
                    $("#txtCustomerSalary").focus();
                    var custSalary = $("#txtCustomerSalary").val();
                    var response = regCustSalary.test(custSalary);
                    if (response) {
                        let res = confirm("Do you want to add this Customer..?");
                        if (res) {
                            addCustomer();
                            clearCustomerFields();
                            loadAllCustomers();
                            generateCustomerId();
                        }
                    } else {
                        $("#txtCustomerSalary").focus();
                    }
                } else {
                    $("#txtCustomerContact").focus();
                }
            } else {
                $("#txtCustomerAddress").focus();
            }
        } else {
            $("#txtCustomerName").focus();
        }
    } else {
        $("#txtCustomerId").focus();
    }
}

// Update Customer Form Validations

$('#txtSearchCustomerId,#txtCName,#txtCaddress,#txtCContact,#txtCsalary').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#txtSearchCustomerId").keyup(function (event) {
    searchCustId = $("#txtSearchCustomerId").val();
    if (regCusId.test(searchCustId)) {
        $("#txtSearchCustomerId").css('border', '2px solid green');
        $("#searchCustIdError").text("");
        if (event.key == "Enter") {
            var foundOrNot = false;
            let foundCustomer = searchCustomer(searchCustId);
            if (foundCustomer) {
                $("#txtCName").val(foundCustomer.getName());
                $("#txtCaddress").val(foundCustomer.getAddress());
                $("#txtCContact").val(foundCustomer.getContact());
                $("#txtCsalary").val(foundCustomer.getSalary());
                $("#btnUpdateCust").prop('disabled', false);
                foundOrNot = true;
                $("#txtCName").css('border', '2px solid green');
                $("#txtCaddress").css('border', '2px solid green');
                $("#txtCContact").css('border', '2px solid green');
                $("#txtCsalary").css('border', '2px solid green');
                $("#txtCName").focus();
            }
            if (foundOrNot == false) {
                alert("Customer Not Found");
                $("#txtCName").val("");
                $("#txtCaddress").val("");
                $("#txtCustomerContact").val("");
                $("#txtCsalary").val("");
                $("#btnUpdateCust").prop('disabled', true);
            }
        }
    } else {
        $("#txtSearchCustomerId").css('border', '2px solid red');
        $("#searchCustIdError").text("Cust ID is a required field.Pattern : C00-001");
        $("#btnUpdateCust").prop('disabled', true);
    }
});

$("#txtCName").keyup(function (event) {
    var custName = $("#txtCName").val();
    if (regCustName.test(custName)) {
        $("#txtCName").css('border', '2px solid green');
        $("#cNameError").text("");
        if (event.key == "Enter") {
            $("#txtCaddress").focus();
        }
        var custId = $("#txtSearchCustomerId").val();
        var custSalary = $("#txtCsalary").val();
        var custAddress = $("#txtCaddress").val();
        var cusContact = $("#txtCContact").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regContact.test(cusContact) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCName").css('border', '2px solid red');
        $("#cNameError").text("Cust name is a required field.");
    }
});

$("#txtCaddress").keyup(function (event) {
    var custAddress = $("#txtCaddress").val();
    if (regCustAddress.test(custAddress)) {
        $("#txtCaddress").css('border', '2px solid green');
        $("#cAddressError").text("");
        if (event.key == "Enter") {
            $("#txtCsalary").focus();
        }
        var custId = $("#txtSearchCustomerId").val();
        var custName = $("#txtCName").val();
        var custSalary = $("#txtdcSalary").val();
        var cusContact = $("#txtCContact").val();


        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regContact.test(cusContact) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCaddress").css('border', '2px solid red');
        $("#cAddressError").text("Customer address is a required field.");
    }
});

$("#txtCContact").keyup(function (event) {
    var cusContact = $("#txtCContact").val();
    if (regContact.test(cusContact)) {
        $("#txtCContact").css('border', '2px solid green');
        $("#contactError").text("");
        if (event.key == "Enter") {
            $("#txtCsalary").focus();
        }
        var custId = $("#txtSearchCustomerId").val();
        var custName = $("#txtCName").val();
        var custAddress = $("#txtCaddress").val();
        var custSalary = $("#txtdcSalary").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regContact.test(cusContact) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCaddress").css('border', '2px solid red');
        $("#cAddressError").text("Customer address is a required field.");
    }
});

$("#txtCsalary").keyup(function (event) {
    var custSalary = $("#txtCsalary").val();
    if (regCustSalary.test(custSalary)) {
        $("#txtCsalary").css('border', '2px solid green');
        $("#cSalaryError").text("");
        var custId = $("#txtSearchCustomerId").val();
        var custName = $("#txtCName").val();
        var custAddress = $("#txtCaddress").val();
        var cusContact = $("#txtCContact").val();

        if (regCusId.test(custId) && regCustName.test(custName) && regCustAddress.test(custAddress) && regContact.test(cusContact) && regCustSalary.test(custSalary)) {
            $("#btnUpdateCust").prop('disabled', false);
        }

        if (event.key == "Enter") {
            let res = confirm("Do you want to update this customer?");
            if (res) {
                updateCustomer();
                loadAllCustomers();
            }
        }

    } else {
        $("#btnUpdateCust").prop('disabled', true);
        $("#txtCsalary").css('border', '2px solid red');
        $("#cSalaryError").text("Customer Salary is a required field.Pattern : 1000.00 or 1000");
    }
});

// Delete Customer Form Validations

$("#txtSearchCId").keyup(function (event) {
    searchCustId = $("#txtSearchCId").val();
    if (regCusId.test(searchCustId)) {
        $("#txtSearchCId").css('border', '2px solid green');
        $("#searchCustomerIdError").text("");
        if (event.key == "Enter") {
            var foundOrNot = false;
            let foundCustomer = searchCustomer(searchCustId);
            if (foundCustomer) {
                $("#txtdcName").val(foundCustomer.getName());
                $("#txtdcAddress").val(foundCustomer.getAddress());
                $("#txtdContact").val(foundCustomer.getContact());
                $("#txtdcSalary").val(foundCustomer.getSalary());
                $("#btnDeleteCustomer").prop('disabled', false);
                foundOrNot = true;
                $("#btnDeleteCustomer").focus();
            }
            if (foundOrNot == false) {
                alert("Customer Not Found");
                $("#txtdcName").val("");
                $("#txtdcAddress").val("");
                $("#txtdContact").val("");
                $("#txtdcSalary").val("");
                $("#btnDeleteCustomer").prop('disabled', true);
            }
        }
    } else {
        $("#txtSearchCId").css('border', '2px solid red');
        $("#searchCustomerIdError").text("Cust ID is a required field.Pattern : C00-001");
        $("#btnDeleteCustomer").prop('disabled', true);
    }
});

/*End Of Customer Form Text Field Validations*/

/*CRUD Operations Of Customer Form*/

// Add Customer

function addCustomer() {
    let customerId = $("#txtCustomerId").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerContact = $("#txtCustomerContact").val();
    let customerSalary = $("#txtCustomerSalary").val();

    var customer = new CustomerDTO(customerId, customerName, customerAddress, customerContact, customerSalary);
    customerDB.push(customer);
}



// Search Customer

function searchCustomer(searchId) {
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getId() == searchId) {
            return customerDB[i];
        } else {
            let res = confirm("Wrong Id?");
            if (res) {
                deleteCustomer();
                addCustomer();
                updateCustomer();
            }
        }
    }
}

// Update Customer

function updateCustomer() {
    let updateCustId = $("#txtSearchCustomerId").val();
    let updateCustName = $("#txtCName").val();
    let updateCustAddress = $("#txtCaddress").val();
    let updateContact = $("#txtCContact").val();
    let updateCustSalary = $("#txtCsalary").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getId() == updateCustId) {
            customerDB[i].setId(updateCustId);
            customerDB[i].setName(updateCustName);
            customerDB[i].setAddress(updateCustAddress);
            customerDB[i].setContact(updateContact);
            customerDB[i].setSalary(updateCustSalary);

            clearUpdateCustomerFields();
            $("#btnUpdateCust").prop('disabled', true);
        }
    }
}

// Delete Customer

function deleteCustomer() {
    let searchCustomerId = $("#txtSearchCId").val();
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getId() == searchCustomerId) {
            customerDB.splice(i, 1);
            clearDeleteCustomerFields();
            $("#btnDeleteCustomer").prop('disabled', true);
        }
    }
}


//ComboBox
$("#btnRegisterCustomer").click(function () {
    var select = document.getElementById("selectcustomerId"),
        txtVal = document.getElementById("txtCustomerId").value,
        newOption = document.createElement("OPTION"),
        newOptionVal = document.createTextNode(txtVal);

    newOption.appendChild(newOptionVal);
    select.insertBefore(newOption, select.lastChild)
});


// Load all customers

function loadAllCustomers() {
    $("#customerTable").empty();
    for (var i = 0; i < customerDB.length; i++) {
        let tableRow = `<tr><td>${customerDB[i].getId()}</td><td>${customerDB[i].getName()}</td><td>${customerDB[i].getAddress()}</td><td> ${customerDB[i].getContact()}</td><td>${customerDB[i].getSalary()}</td></tr>`;
        $("#customerTable").append(tableRow);
    }
}

/*End Of CRUD Operations*/

/*Other Functions*/

// Generate Customer Id

function generateCustomerId() {
    if (customerDB.length == 0) {
        $("#txtCustomerId").val("C00-0001");
    } else if (customerDB.length > 0) {
        var id = customerDB[customerDB.length - 1].getId().split("-")[1];
        var tempId = parseInt(id);
        tempId = tempId + 1;
        if (tempId <= 9) {
            $("#txtCustomerId").val("C00-000" + tempId);
        } else if (tempId <= 99) {
            $("#txtCustomerId").val("C00-00" + tempId);
        } else if (tempId <= 999) {
            $("#txtCustomerId").val("C00-0" + tempId);
        } else if (tempId <= 9999) {
            $("#txtCustomerId").val("C00-" + tempId);
        }
    }
}

// Search Customer By Table

function searchCustomerByTable(searchId) {
    var customer = searchCustomer(searchId);
    let foundOrNot = false;
    if (customer) {
        var id = customer.getId();
        var name = customer.getName();
        var address = customer.getAddress();
        var contact = customer.getContact();
        var salary = customer.getSalary();

        $("#customerTable").empty();

        let tableRow = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${contact}</td><td>${salary}</td></tr>`;
        $("#customerTable").append(tableRow);
        foundOrNot = true;
    }
    if (foundOrNot == false) {
        alert("Customer Not Found");
        loadAllCustomers();
    }
}

/*Controller Functions*/
// Add Customer Form

$("#registerCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtCustomerId").focus();
    generateCustomerId();
});

$("#btnRegisterCustomer").prop('disabled', true);

$("#btnRegisterCustomer").click(function () {
    let res = confirm("Do you want to add this customer?");
    if (res) {
        addCustomer();
        clearCustomerFields();
        loadAllCustomers();
        generateCustomerId();
    }
});

$("#btnclearcustomerform").click(function () {
    clearCustomerFields();
    generateCustomerId();
});

function clearCustomerFields() {
    $("#txtCustomerId").focus();

    $("#txtCustomerId").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerContact").val("");
    $("#txtCustomerSalary").val("");

    $("#customerIdError").text("");
    $("#customerNameError").text("");
    $("#customerAddressError").text("");
    $("#customerContactError").text("");
    $("#customerSalaryError").text("");

    $("#txtCustomerId").css('border', '1px solid #ced4da');
    $("#txtCustomerName").css('border', '1px solid #ced4da');
    $("#txtCustomerAddress").css('border', '1px solid #ced4da');
    $("#txtCustomerContact").css('border', '1px solid #ced4da');
    $("#txtCustomerSalary").css('border', '1px solid #ced4da');

    $("#btnRegisterCustomer").prop('disabled', true);
}


// Update Customer Form

$("#btnUpdateCust").prop('disabled', true);

$("#updateCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtSearchCustomerId").focus();
});

$("#btnUpdateCust").click(function () {
    let res = confirm("Do you want to update this customer?");
    if (res) {
        updateCustomer();
        loadAllCustomers();
    }
});

$("#btnClearUpdateCustomer").click(function () {
    $("#btnUpdateCust").prop('disabled', true);
    clearUpdateCustomerFields();
});

function clearUpdateCustomerFields() {
    $("#txtSearchCustomerId").focus();

    $("#txtSearchCustomerId").val("");
    $("#txtCName").val("");
    $("#txtCaddress").val("");
    $("#txtCContact").val("");
    $("#txtCsalary").val("");

    $("#searchCustIdError").text("");
    $("#cNameError").text("");
    $("#cAddressError").text("");
    $("#contactError").text("");
    $("#cSalaryError").text("");

    $("#txtSearchCustomerId").css('border', '1px solid #ced4da');
    $("#txtCName").css('border', '1px solid #ced4da');
    $("#txtCaddress").css('border', '1px solid #ced4da');
    $("#txtCContact").css('border', '1px solid  #ced4da')
    $("#txtCsalary").css('border', '1px solid #ced4da');
}

// Delete Customer Form

$("#btnDeleteCustomer").prop('disabled', true);

$("#deleteCustomer").on('shown.bs.modal', function () {
    $(this).find("#txtSearchCId").focus();
});

$("#btnDeleteCustomer").click(function () {
    let res = confirm("Do you want to delete this customer?");
    if (res) {
        deleteCustomer();
        loadAllCustomers();
    }
});

$("#btnClearDeleteCustomerFields").click(function () {
    $("#btnDeleteCustomer").prop('disabled', true);
    clearDeleteCustomerFields();
});

function clearDeleteCustomerFields() {
    $("#txtSearchCId").focus();

    $("#txtSearchCId").val("");
    $("#txtdcName").val("");
    $("#txtdcAddress").val("");
    $("#txtdContact").val("");
    $("#txtdcSalary").val("");

    $("#searchCustomerIdError").text("");
}

//Other

$("#searchCustomerForm").submit(function (e) {
    e.preventDefault();
});

$("#txtSCustId").on('keyup', function (event) {
    if (event.key == "Enter") {
        var custId = $("#txtSCustId").val();
        searchCustomerByTable(custId);
    }
});

$("#btnSearchCustId").click(function () {
    var custId = $("#txtSCustId").val();
    searchCustomerByTable(custId);
});

$("#btnClearSearchField").click(function () {
    $("#txtSCustId").val("");
    loadAllCustomers();
});
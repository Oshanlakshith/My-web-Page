$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerContact,#txtCustomerSalary').click(function () {
    validation();
    forcuss();
});

function forcuss() {
    $("#txtCustomerId").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtCustomerName").focus();
        }
    });
    $("#txtCustomerName").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtCustomerAddress").focus();
        }
    });
    $("#txtCustomerAddress").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtCustomerContact").focus();
        }
    });
    $("#txtCustomerContact").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtCustomerSalary").focus();
        }
    });
    $("#txtCustomerSalary").keydown(function (event) {
        if (event.key == "Enter") {
            saveCustomer();
            loadTable();
            textFildAdd();
        }

        function loadTable() {
            $("#customerTable").empty();
            for (var i of CustomerDB) {
                let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.contact}</td><td>${i.salery}</td></tr>`;
                $("#customerTable").append(row);
            }
        }

        function saveCustomer() {
            let cusId = $("#txtCustomerId").val();
            let cusname = $("#txtCustomerName").val();
            let cusaddress = $("#txtCustomerAddress").val();
            let cuscontact = $("#txtCustomerContact").val();
            let cussalery = $("#txtCustomerSalary").val();

            var customerOb = {
                id: cusId,
                name: cusname,
                address: cusaddress,
                contact: cuscontact,
                salery: cussalery
            };
            CustomerDB.push(customerOb);
        }

        function textFildAdd() {
            $("#customerTable>tr").click(function () {
                let customerId = $(this).children(":eq(0)").text();
                let customerName = $(this).children(":eq(1)").text();
                let customerAddress = $(this).children(":eq(2)").text();
                let customerContact = $(this).children(":eq(3)").text();
                let customerSalary = $(this).children(":eq(4)").text();

                console.log(customerId, customerName, customerAddress, customerContact, customerSalary)

                $("#txtCustomerId").val(customerId);
                $("#txtCustomerName").val(customerName);
                $("#txtCustomerAddress").val(customerAddress);
                $("#txtCustomerContact").val(customerContact);
                $("#txtCustomerSalary").val(customerSalary);
            });
        }

    });
}

function validation() {
    var regExCId = /^(C00-)[0-9]{3,4}$/;
    var regExCName = /^[A-z]{3,15}$/;
    var regExAddress = /^[0-9]{1,4}?[,]? [A-z]{1,20}$/;
    var regExContact = /^[0-9]{3}[-]?[0-9]{6,8}$/;
    var regExSalary = /^[0-9]{4,6}$/;

    $("#txtCustomerId").keyup(function () {

        let input = $("#txtCustomerId").val();
        if (regExCId.test(input)) {
            $("#txtCustomerId").css('border', '2px solid green');
            $("#lblcusid").text("");
        } else {
            $("#txtCustomerId").css('border', '2px solid red');
            $("#lblcusid").text("Cus ID is a required field : Pattern C00-000");

        }
    });


    $("#txtCustomerName").keydown(function () {
        let input = $("#txtCustomerName").val();
        if (regExCName.test(input)) {
            $("#txtCustomerName").css('border', '2px solid green');
            $("#lblcusname").text("");
        } else {
            $("#txtCustomerName").css('border', '2px solid red');
            $("#lblcusname").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed")
        }
    });

    $("#txtCustomerAddress").keydown(function () {
        let input = $("#txtCustomerAddress").val();
        if (regExAddress.test(input)) {
            $("#txtCustomerAddress").css('border', '2px solid green');
            $("#lblcusaddress").text("");
        } else {
            $("#txtCustomerAddress").css('border', '2px solid red');
            $("#lblcusaddress").text("Cus Address is a required field : Mimum 7");
        }
    });

    $("#txtCustomerContact").keydown(function () {
        let input = $("#txtCustomerContact").val();
        if (regExContact.test(input)) {
            $("#txtCustomerContact").css('border', '2px solid green');
            $("#lblcuscontact").text("");
        } else {
            $("#txtCustomerContact").css('border', '2px solid red');
            $("#lblcuscontact").text("Cus Contact is a required field : Mimum 10");
        }
    });

    $("#txtCustomerSalary").keydown(function () {
        let input = $("#txtCustomerSalary").val();
        if (regExSalary.test(input)) {
            $("#txtCustomerSalary").css('border', '2px solid green');
            $("#lblcussalery").text("");
        } else {
            $("#txtCustomerSalary").css('border', '2px solid red');
            $("#lblcussalery").text("Cus salery is a required field :minimum 3");
        }
    });
}
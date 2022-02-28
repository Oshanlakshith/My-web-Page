$('#txtitemId,#txtitemname,#txtitemQty,#txtitemPrice').click(function () {
    Ivalidation();
    forcus();
});

function forcus() {
    $("#txtitemId").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtitemname").focus();
        }
    });
    $("#txtitemname").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtitemQty").focus();
        }
    });
    $("#txtitemQty").keydown(function (event) {
        if (event.key == "Enter") {
            $("#txtitemPrice").focus();
        }
    });

    $("#txtitemPrice").keydown(function (event) {
        if (event.key == "Enter") {
            let itemId = $("#txtitemId").val();
            let itemName = $("#txtitemname").val();
            let itemQty = $("#txtitemQty").val();
            let itemPrice = $("#txtitemPrice").val();

            let row = `<tr><td>${itemId}</td><td>${itemName}</td><td>${itemQty}</td><td>${itemPrice}</td></tr>`;
            $("#itemTable").append(row);
        }
        $("#itemTable>tr").click(function () {
            let itemId = $(this).children(":eq(0)").text();
            let itemName = $(this).children(":eq(1)").text();
            let itemQty = $(this).children(":eq(2)").text();
            let itemPrice = $(this).children(":eq(3)").text();

            console.log(itemId, itemName, itemQty, itemPrice)
            $("#txtitemId").val(itemId);
            $("#txtitemname").val(itemName);
            $("#txtitemQty").val(itemQty);
            $("#txtitemPrice").val(itemPrice);
        });
    });
}

function Ivalidation() {
    var regExitemId = /^(I00-)[0-9]{3,4}$/;
    var regExitemName = /^[A-z]{3,20}$/;
    var regExitemqty = /^[0-9]{1,5}$/;
    var regExitemprice = /^[0-9]{1,5}$/;

    $("#txtitemId").keydown(function () {
        let input = $("#txtitemId").val();
        if (regExitemId.test(input)) {
            $("#txtitemId").css('border', '2px solid green');
            $("#lblitemid").text("");
        } else {
            $("#txtitemId").css('border', '2px solid red');
            $("#lblitemid").text("Cus ID is a required field : Pattern I00-000")
        }
    });


    $("#txtitemname").keydown(function () {
        let input = $("#txtitemname").val();
        if (regExitemName.test(input)) {
            $("#txtitemname").css('border', '2px solid green');
            $("#lblitemname").text("")
        } else {
            $("#txtitemname").css('border', '2px solid red');
            $("#lblitemname").text("Item Name is a required field : Mimimum 5, Max 20, Spaces Allowed")
        }
    });

    $("#txtitemQty").keydown(function () {
        let input = $("#txtitemQty").val();
        if (regExitemqty.test(input)) {
            $("#txtitemQty").css('border', '2px solid green');
            $("#lblitemqty").text("");
        } else {
            $("#txtitemQty").css('border', '2px solid red');
            $("#lblitemqty").text("Item Qty is a required field : Mimimum 1, Max 4, Spaces Allowed")
        }
    });

    $("#txtitemPrice").keydown(function () {
        let input = $("#txtitemPrice").val();
        if (regExitemprice.test(input)) {
            $("#txtitemPrice").css('border', '2px solid green');
            $("#lblitemprice").text("");
        } else {
            $("#txtitemPrice").css('border', '2px solid red');
            $("#lblitemprice").text("Item Price is a required field : Mimimum 2, Max 4, Spaces Allowed");
        }
    });
}

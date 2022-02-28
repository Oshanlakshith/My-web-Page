$('#linkHome,#linkCustomer,#linkItem,#linkOrder').click(function () {
    linkPage();
});

function linkPage() {
    $("#main").css("display", "block");
    $("#customerContent").css("display", "none");
    $("#itemContent").css("display", "none");
    $("#placeOrderPage").css("display", "none");


    $("#linkCustomer").click(function () {
        $("#customerContent").css("display", "block");
        $("#main").css("display", "none");
        $("#itemContent").css("display", "none");
        $("#placeOrderPage").css("display", "none");
    });

    $("#linkItem").click(function () {
        $("#itemContent").css("display", "block");
        $("#customerContent").css("display", "none");
        $("#main").css("display", "none");
        $("#placeOrderPage").css("display", "none");
    });
    $("#linkOrder").click(function () {
        $("#placeOrderPage").css("display", "block");
        $("#main").css("display", "none");
        $("#itemContent").css("display", "none");
        $("#customerContent").css("display", "none");

    });

    $("#linkHome").click(function () {
        $("#main").css("display", "block");
        $("#itemContent").css("display", "none");
        $("#customerContent").css("display", "none");
        $("#placeOrderPage").css("display", "none");
    });

}

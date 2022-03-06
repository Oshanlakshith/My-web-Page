

    $("#btnRegisterCustomer").click(function () {
        var select = document.getElementById("selectcustomerId"),
            txtVal = document.getElementById("txtCustomerId").value,
            newOption = document.createElement("OPTION"),
            newOptionVal = document.createTextNode(txtVal);

        newOption.appendChild(newOptionVal);
        select.insertBefore(newOption, select.lastChild)
    });

    $("#btnAddItem").click(function () {
        var select = document.getElementById("selectItemcode"),
            txtVal = document.getElementById("txtIcode").value,
            newOption = document.createElement("OPTION"),
            newOptionVal = document.createTextNode(txtVal);

        newOption.appendChild(newOptionVal);
        select.insertBefore(newOption, select.lastChild)
    });

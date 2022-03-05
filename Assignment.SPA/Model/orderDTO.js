function OrderDTO(){
    var __OrderId=orderId;
    var __OrderDate=orderDate;
    var __id = id;
    var __name = name;
    var __address = address;
    var __salary = salary;
    var __code = code;
    var __Iname = Iname;
    var __unitPrice = unitPrice;
    var __qty = qty;

    this.getOId=function (){
        return __OrderId;
    }
    this.setOId=function (orderId){
        __OrderId=orderId;
    }
    this.getODate=function (){
        return __OrderDate;
    }
    this.setODate=function (orderDate){
        __OrderDate=orderDate;
    }
    this.getId = function () {
        return __id;
    }

    this.setId = function (id) {
        __id = id;
    }

    this.getName = function () {
        return __name;
    }

    this.setName = function (name) {
        __name = name;
    }

    this.getAddress = function () {
        return __address;
    }

    this.setAddress = function (address) {
        __address = address;
    }

    this.getSalary = function () {
        return __salary;
    }

    this.setSalary = function (salary) {
        __salary = salary;
    }
    this.getCode = function () {
        return __code;
    }

    this.setCode = function (code) {
        __code = code;
    }

    this.getIName = function () {
        return __Iname;
    }

    this.setIName = function (name) {
        __Iname = name;
    }

    this.getUnitPrice = function () {
        return __unitPrice;
    }

    this.setUnitPrice = function (unitPrice) {
        __unitPrice = unitPrice;
    }

    this.getQty = function () {
        return __qty;
    }

    this.setQty = function (qty) {
        __qty = qty;
    }
}

function OrderDTO(orderId,code,orderDate,name,unitPrice,qty,noItem,total){
    var __OrderId=orderId;
    var __code = code;
    var __OrderDate=orderDate;
    var __name = name;
    var __unitPrice = unitPrice;
    var __qty = qty;
    var __noItem=noItem;
    var __tot=total;

    this.getOId=function (){
        return __OrderId;
    }
    this.setOId=function (orderId){
        __OrderId=orderId;
    }
    this.getCode = function () {
        return __code;
    }

    this.setCode = function (code) {
        __code = code;
    }
    this.getODate=function (){
        return __OrderDate;
    }
    this.setODate=function (orderDate){
        __OrderDate=orderDate;
    }

    this.getName = function () {
        return __name;
    }

    this.setName = function (name) {
        __name = name;
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

    this.getnoItem = function () {
        return __noItem;
    }

    this.setnoItem = function (noItem) {
        __noItem = noItem;
    }
    this.getTotal = function () {
        return __tot;
    }

    this.setTotal = function (total) {
        __tot = total;
    }
}

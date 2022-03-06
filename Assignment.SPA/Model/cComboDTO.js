function CustomerIdCombo(cid) {
    var __Cid = cid;

    this.getCId = function () {
        return __Cid;
    }
    this.setCId = function (cid) {
        __Cid = cid
    }
}
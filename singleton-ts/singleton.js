var SingletonTS = /** @class */ (function () {
    function SingletonTS() {
        this.ramdom = Math.random();
    }
    SingletonTS.getInstance = function () {
        if (SingletonTS.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    };
    return SingletonTS;
}());
var obj1 = SingletonTS.getInstance();
var obj2 = SingletonTS.getInstance();
console.log(obj1.ramdom);
console.log(obj2.ramdom);

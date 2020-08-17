console.log(11111111111);
var s = "1111";
console.log(s);
var site = (function () {
    function site(){};
    site.prototype.name = function () {
        console.log("runoob1111");
    };
    return site;
}());
var obj = new site();
obj.name();

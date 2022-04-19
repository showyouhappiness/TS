function add(a, b) {
    return a + b;
}
console.log(add('1', 2));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
function merry(a, b) {
    if (a.gender != b.gender) {
        return [a, b];
    }
    else {
        throw new Error('性别相同不能结婚');
    }
}
var a = { gender: Gender.Male };
var b = { gender: Gender.Female };
console.log(merry(a, b));

var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var color = Color1.Blue;
console.log(color); // 2
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 5] = "Red";
    Color3[Color3["Green"] = 10] = "Green";
    Color3[Color3["Blue"] = 1] = "Blue";
})(Color3 || (Color3 = {}));
var Color4;
(function (Color4) {
    Color4["Red"] = "red";
    Color4["Green"] = "green";
    Color4["Blue"] = "blue";
})(Color4 || (Color4 = {}));
var color2 = Color4.Blue;
console.log(color2);

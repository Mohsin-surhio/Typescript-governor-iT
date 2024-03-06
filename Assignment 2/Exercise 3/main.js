// in loverCase
var personName = "MOHSIN ALI";
console.log("In loverCase:", personName.toLocaleLowerCase());
// in upperCase
var fullName = "mohsin ali ";
console.log("In UpperCase", fullName.toLocaleUpperCase());
// in titleCase
var titleName = "mohsin ali";
console.log("In titleCase", titleName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

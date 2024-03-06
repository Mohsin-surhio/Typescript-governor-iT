// in loverCase
let personName: string= "MOHSIN ALI"
console.log (`In loverCase:` ,personName.toLocaleLowerCase());
// in upperCase
let fullName:string="mohsin ali "
console.log(`In UpperCase`,fullName.toLocaleUpperCase());

// in titleCase
let titleName:string = "mohsin ali";
console.log(`In titleCase`,titleName.replace(/\bw/g,c => c.toUpperCase()))

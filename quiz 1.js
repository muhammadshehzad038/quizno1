//question no 1
//no output show on compiler


//question no2
 
function Palindrome(str) {

    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'given string is not a palindrome';
        }
    }
    return 'String is a palindrome';
}
const string = prompt('Enter a string: ');
var value = Palindrome(str);
console.log(value);


//question no 3
console.log(1+ "2"+"2")//output 122
console.log(1+  +"2"+"2")// output 32
console.log(1+ -"1"+"2")// output 02
console.log("A"-"B"+"2")// output nan2
console.log("A"- "B"+ 2)//output nan


//question no 4
let myarray=['a','b','c','d']
myarray.unshift('z');//insert element at the start of array
myarray.push('f');//insert element at the end of array

//question no 5
var myobj=["a","b","c","d","e","f","f"]
let myvalue=myobj.filter((v,i,a)=> a.indexOf(v)== i);
console.log(myvalue)

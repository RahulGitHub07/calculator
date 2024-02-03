// function fibbonnaciSeries(){
//     let n=Number(document.getElementById("nthfibbonnaci").value);
//     let num1=0;
//     let num2=1;
//     let num3=0;
//     for(let i=1;(i<=n-2)&&(n>2);i++){
//         num3=num1+num2;
//         num1=num2;
//         num2=num3;
//     }
//     n==2?num3=1:
//     console.log(num3);
//     document.getElementById("output1").innerText=num3;
// }

// function numberName(){
//     let n=document.getElementById("number").value;
//     let numarray=["","one","two","three","four","five","six","seven","eight","nine","ten"]
//     length=n.length;
//     n=Number(n);
//     let num1=n;
//     let tens=0;
//     let num2=0;
//     for(let i=1;i<=n;i++){
//         tens=num1%10;
//         num1=Math.floor(num1/10);
//         if(i=1){
//             num1
//         }

//         else if(i=2){

//         }
//     }
        
//     document.getElementById("output2").innerText=numname;
//     }

let n=prompt("give the number");
let onesarray=[""," one"," two"," three"," four"," five"," six"," seven"," eight"," nine"];
let tensarray=["","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
let hunsarray=["","one hundred and ","two hundred and ","three hundred and ","four hundred and ","five hundred and ","six hundred and ","seven hundred and ","eight hundred and ","nine hundred and "];
let thousndsarray=["","one thousand ","two thousand ","three thousand ","four thousand ","five thousand ","six thousand ","seven thousand ","eight thousand ","nine thousand "];
let lakharray=["","one lakh ","two lakh ","three lakh ","four lakh ","five lakh ","six lakh ","seven lakh ","eight lakh ","nine lakh ","ten lakh "];
let croresarray=["","one crore ","two crore ","three crore ","four crore ","five crore ","six crore ","seven crore ","eight crore ","nine crore ","ten crore "];
let elvensarray=["","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "];
let length=n.length;
let split;
var splitnum=n.split("");
n=Number(n);
let num1=n;
let tens=0;
let num2=0;
let nameofnum="";
for(let i=1;i<=length;i++){
    tens=num1%10;
    num1=Math.floor(num1/10);
    num2=Math.floor(num1/100);

    if(i==1){
        nameofnum=onesarray[tens]+nameofnum;
        split=splitnum[tens];
        
    }

    else if(i==2){
       
         nameofnum=tensarray[tens]+nameofnum;
    }

    else if(i==3){
        nameofnum=hunsarray[tens]+nameofnum;
    }

    else if(i==4){
        nameofnum=thousndsarray[tens]+nameofnum;
        split=splitnum[tens];
    }

    else if(i==5){
        nameofnum=tensarray[tens]+nameofnum;
    }

    else if(i==6){
        nameofnum=lakharray[tens]+nameofnum;
    }

    else if(i==7){
        nameofnum=tensarray[tens]+nameofnum;
    }

    else if(i==8){
        nameofnum=croresarray[tens]+nameofnum;
    }
}

console.log(nameofnum);
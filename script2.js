function numinwords(){
    let numinnumber=prompt("give the number");
    let onesarray=["","one","two","three","four","five","six","seven","eight","nine","ten"];
    let tensarray=["","//ten//","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
    let hunsarray=["","onehundred and","twohundred and","threehundred and","fourhundred and","fivehundred and","sixhundred and","sevenhundred and","eighthundred and","ninehundred and"];
    let thousndsarray=["","one thousand","two thousand","three thousand","four thousand","five thousand","six thousand","seven thousand","eight thousand","nine thousand"];
    let lakharray=["","one lakh","two lakh","three lakh","four lakh","five lakh","six lakh","seven lakh","eight lakh","nine lakh","ten lakh"];
    let croresarray=["","one crore","two crore","three crore","four crore","five crore","six crore","seven crore","eight crore","nine crore","ten crore"];
    length=numinnumber.length;
    numinnumber=Number(numinnumber);
    let num1=numinnumber;
    let tens=0;
    let num2=0;
    let nameofnum="";
    for(let i=1;i<=length;i++){
        num2=Math.floor(num1/(10**length-1));
        num1=num1-(num2*(10**length-1));
    
        if(i==1){
            if(length=1){
            nameofnum+=onesarray[num2];
            }
        }
    
        else if(i==2){
            nameofnum+=tensarray[tens];
        }
    
        else if(i==3){
            nameofnum+=hunsarray[tens];
        }
    
        else if(i==4){
            nameofnum+=thousndsarray[tens];
        }
    
        else if(i==5){
            nameofnum+=lakharray[tens];
        }
    
        else if(i==6){
            nameofnum+=croresarray[tens];
        }
        length--;
    }
    
    console.log(nameofnum);
    }
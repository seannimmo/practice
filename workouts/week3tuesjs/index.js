//Checks to see if Czech birth number is valid.
function isValid(){
    let id = prompt("Write your birth ID");
    let year = id[0] + id[1];
    let month = id[2] + id[3];
    let day = id[4] + id[5];
    let arb= id[7] +id[8] + id[9] + id[10];
    let fullnum= id[0] + id[1] + id[2] + id[3] + id[4] + id[5] + id[7] +id[8] + id[9] + id[10];
    month=parseInt(month);
    year=parseInt(year);
    day = parseInt(day);

    
    arb= parseInt(arb);
    if(month<=12 || month>=51 && month <=62){
        if(day<=31) {
            if((fullnum%11)===0){
                alert("This number is valid");

            }
            else {
                alert("This is invalid");
            }
        }
        else {
            alert("This is invalid");
        }
    }
    else {
        alert("This is invalid");
    }

}

//convert to roman numerals

function roman(){
    let number = prompt("Write a number up to 4000");
    //number= parseInt(number);
    let ronum = "";
    console.log(number);
    let numarray = [number[0],number[1],number[2],number[3]];
    
    if(number[0]==1){
        ronum=ronum+'M';
    }
    else if(number[0]==2){
        ronum=ronum+'MM';
    }
    else if(number[0]==3){
        ronum=ronum+'MMM';
    }
    console.log(ronum);

    if(number[1]==1){
        ronum=ronum+'C';
    }
    else if(number[1]==0){
        ronum=ronum;
    }
    else if(number[1]==2){
        ronum=ronum+'CC';
    }
    else if(number[1]==3){
        ronum=ronum+'CC';
    }
    else if(number[1]==4){
        ronum=ronum+'CD';
    }
    else if(number[1]==5){
        ronum=ronum+'D';
    }
    else if(number[1]==6){
        ronum=ronum+'DC';
    }
    else if(number[1]==7){
        ronum=ronum+'DCC';
    }
    else if(number[1]==8){
        ronum=ronum+'DCCC';
    }
    else if(number[1]==9){
        ronum=ronum+'CM';
    }

    if(number[2]==1){
        ronum=ronum+'X'
    }
    else if(number[2]==0){
        ronum=ronum;
    }
    else if(number[2]==2){
        ronum=ronum+'XX'
    }
    else if(number[2]==3){
        ronum=ronum+'XXX'
    }
    else if(number[2]==4){
        ronum=ronum+'XL'
    }
    else if(number[2]==5){
        ronum=ronum+'L'
    }
    else if(number[2]==6){
        ronum=ronum+'LX'
    }
    else if(number[2]==7){
        ronum=ronum+'LXX'
    }
    else if(number[2]==8){
        ronum=ronum+'LXXX'
    }
    else if(number[2]==9){
        ronum=ronum+'XC'
    }
    

    if(number[3]==1) {
        ronum= ronum+'I';
    }
    else if(number[3]==2) {
        ronum= ronum+'II';
    }
    else if(number[3]==0){
        ronum=ronum;
    }
    else if(number[3]==3) {
        ronum= ronum+'III';
    }
    else if(number[3]==4) {
        ronum= ronum+'IV';
    }
    else if(number[3]==5) {
        ronum= ronum+'V';
    }
    else if(number[3]==6) {
        ronum= 'VI';
    }
    else if(number[3]==7) {
        ronum= 'VII';
    }
    else if(number[3]==8) {
        ronum= 'VIII';
    }
    else if(number[3]==9) {
        ronum= 'IX';
    }

    console.log(ronum);
}

//does it have the right parentheses? 

function isCorrect(paren){
    let counter= 0;
    for(let i=0; i<paren.length; i++) {
        if(paren[i]==="("){
            counter++;
        }
        else if(paren[i]===")"){
            counter--;
        }
        
        if(counter<0){
            alert("This string is invalid");
        }
    }
    if(counter===0){
        alert("This is valid");
    }
    else{
        alert("This is invalid");
    }
}
let key = 0

// const dieRoll = () => {
//     console.log('it works');
//     die.src="sides/side" + key + ".png";
//     if(key===6){
//         key = 1;
//     }
//     else {
//         key++;
//     }
   
// }

const dieRoll = () => {
    let picture = Math.ceil(Math.random()*6);
    console.log(picture);
    die.src="sides/side" + picture + ".png";
}

const die = document.querySelector('#die');
die.addEventListener('click', dieRoll);
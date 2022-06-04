import langs from 'langs';
import {franc, francAll} from 'franc';
import colors from 'colors';
// take user input as array, join array into one string, convert 
// to a joined array one object, get code for new array
const input = process.argv.splice(2);
const newArray = input.join(' ');
const lcode = franc(newArray);


// take franc code and input into langs, print language name

if(lcode === 'und'){
    console.log("Sorry couldn't find language, try with more sample text".red)
}  else {
    const language = langs.where("3", lcode);
    console.log(`My best guess is, ${language.name}`.green);
}





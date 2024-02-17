const fs = require('node:fs');
const content = 'Some content!';
//const newText =  await fs.promises.readFile("./utils/test/test.txt", "utf-8",);//, err => {
  
//if (err) {
    //console.error(err);
  //} else {
      //console.log(newText);
    // file written successfully
  //}
//});

const myFunc = async () => {
   const newText =  await fs.promises.readFile("./utils/test/test.txt", "utf-8",); 
console.log(newText);
}

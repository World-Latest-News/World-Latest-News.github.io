// Requiring fs module in which 
// readFile function is defined.
import { readFile } from 'fs';
  
var data = readFile('head.html');
// readFile('../head.html', (err, data) => {
//     if (err) throw err;
  
//     console.log(data.toString());
// });

// var head = document.getElementsByTagName('head')[0];
document.getElementById("head").innerHTML = data;
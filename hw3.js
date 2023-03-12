//let name = prompt("Вкажіть ваше ім'я")
//alert ("Вітаю " + name)


//let inputString = prompt("Введіть рядок:");
//let words = inputString.split(',');
//for (let i = 0; i < words.length - 1; i++) {
//  words[i] += " блін";}
//let outputString = words.join(',');
//alert(outputString);



//let str = "cANBerRa";
//let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//console.log(result); // Canberra


//let text = prompt("Вкажіть декілька слів");
//let text1 = text.split(" ");
//let text3 =text1.length;
//alert = text3;




//let firstName = prompt("Введіть ім'я:");
//let lastName = prompt("Введіть прізвище:");
//let middleName = prompt("Введіть по-батькові:");
//firstName = firstName.trim();
//lastName = lastName.trim();
//middleName = middleName.trim();
//firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
//middleName = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
//let fullName = firstName + " " + lastName + " " + middleName;
//console.log(fullName);

  

//let str = "Було жарко. Василь пив пиво вприкуску з креветками";
//let words = str.split(" ");
//for (let i = 0; i < words.length; i++) {
//  if (words[i].indexOf("пиво") !== -1) {
//    let index = words[i].indexOf("пиво");
//    words[i] = words[i].slice(0, index) + "чай" + words[i].slice(index + 4);
//  }
//}
//let result = words.join(" ");
//console.log(result); // "Було жарко. Василь пив чай вприкуску з креветками"


//let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
//let startIndex = str.indexOf("<");
//let endIndex = str.indexOf(">") + 1;
//let result = str.slice(0, startIndex) + str.slice(endIndex);
//console.log(result); 


//let str = "якийсь текст у якому є один тег <br /> і всяке інше";
//let result;
//let startIndex = str.indexOf("<");
//let endIndex = str.indexOf(">");
//let tag = str.slice(startIndex, endIndex + 1).toUpperCase();
//result = str.slice(0, startIndex) + tag + str.slice(endIndex + 1);
//console.log(result); // "якийсь текст у якому є один тег <BR /> і всяке інше"


//let str = prompt("Введіть рядок з переносами рядків (використовуйте \\n)")
//let lines = str.split("\\n")
//let result = lines.join("\n")
//console.log(result)


const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)(?:&(?:amp;)?[\w?=]*)?/;
const input = prompt('Введіть текст із посиланням на YouTube:');
const match = input.match(regex);

if (match) {
  const videoId = match[1];
  const embedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  document.write(embedHtml);
} else {
  alert('Посилання на YouTube не знайдено!');
}



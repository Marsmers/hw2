//let age = prompt("Введіть ваш вік:");
//let yearOfBirth = new Date().getFullYear() - age;
//alert("Ваш рік народження: " + yearOfBirth);



//let celsius = prompt("Введіть температуру в градусах Цельсія:");
//let fahrenheit = (celsius * 1.8) + 32;
//alert("Температура в градусах Фаренгейта: " + fahrenheit);




//let number1 = prompt("Введіть перше число:");
//let number2 = prompt("Введіть друге число:");
//number1 = Number(number1);
//number2 = Number(number2);
//let result = Math.floor(number1 / number2);
//alert("Результат ділення : " + result);



//let amount = prompt("Введіть суму в одній валюті:");
//amount = Number(amount);
//const rate = 27.6;
//let exchangedAmount = amount / rate;
//exchangedAmount = exchangedAmount.toFixed(2);
//alert("Сума в обміні: " + exchangedAmount);


//let red = prompt("Введіть значення червоного кольору (від 0 до 255):");
//let green = prompt("Введіть значення зеленого кольору (від 0 до 255):");
//let blue = prompt("Введіть значення синього кольору (від 0 до 255):");
//let hexRed = parseInt(red).toString(16);
//let hexGreen = parseInt(green).toString(16);
//let hexBlue = parseInt(blue).toString(16);
//let color = "#" + hexRed + hexGreen + hexBlue;
//alert("Колір: " + color);



//let numFloors = prompt("Введіть кількість поверхів у будинку:");
//let numFlatsPerFloor = prompt("Введіть кількість квартир на поверсі:");
//numFloors = Number(numFloors);
//numFlatsPerFloor = Number(numFlatsPerFloor);
//let flatNumber = prompt("Введіть номер квартири:");
//flatNumber = Number(flatNumber);
//let entranceNumber = Math.ceil(flatNumber / (numFloors * numFlatsPerFloor));
//let floorNumber = Math.ceil((flatNumber - (entranceNumber - 1) * numFloors * numFlatsPerFloor) / numFlatsPerFloor);
//alert("Квартира з номером " + flatNumber + " знаходиться на " + entranceNumber + " під'їзді та " + floorNumber + " поверсі.");
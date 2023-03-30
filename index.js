// const arr = [1,2,3,4,5];

// document.write(arr)

// const map1 = arr.map(x => x*3);

// document.write(map1)

// const alert1 = () =>{
//     alert('done')
// }

// alert1();

// const a = +prompt('Enter First Number')
// const b = +prompt("Enter Second Number")

// const c = a+b;

// console.log("sum is "+a+" and "+b+" are : " +c);

// const a = 25;

// const squred = Math.sqrt(a);

// console.log(squred);

// function func() {
//     const a = +prompt("Enter The First Number");
//     const b = +prompt("Enter The Second Number");

//     const c = a + b;

//     document.write(c);
// };


// function func(){
//     const arr = [4, 16, 64, 144, 169];
//     const arr1 = arr.map(Math.sqrt);

//     document.write(arr1)

// }

// func();

// const base = +prompt("Enter Number First");

// const height = +prompt('Enter Number Second');

// const area = (base*height)/2;

// document.write('base: '+base+' height: '+height+' area:' +area);

// const a = 10;
// const b = 5;
// const c = 10;

// const s = (a+b+c)/2;

// const temp = s*(s-a)*(s-b)*(s-c);

// console.log(temp);

// const squred = Math.sqrt(temp)

// console.log(squred);

// var a = prompt('Enter The First Value');
// var b = prompt('Enter The Second Value');

// console.log(`value a: ${a} and value b: ${b} `);

// var temp;

// temp = a;
// a = b;
// b = temp;

// console.log( `value a: ${a} and value b: ${b}`);


// function convert(){
//     const kms = document.getElementById('data').value;
//     const factor = 0.621371;
//     const miles = kms * factor;

//     document.getElementById('res').innerText = `miles: ${miles}`
// }


// function convert(){
//     const minutes = document.getElementById('data').value;
//     const second = 60;
//     const minutesToSecond = minutes * second;
//     document.getElementById('res').innerText = `${minutes}: minutes in ${minutesToSecond}: seconds`
// }

// function check() {
//     var number = document.getElementById('data').value;
//     var check = Math.sign(number);

//     if (number > 0) {
//         check = `${number} is POSITIVE`
//     } else if (number < 0) {
//         check = `${number} is NEGETIVE`
//     }else if (number === 0){
//         check = `${number} is Zero`
//     }else{
//         check = 'NAN'
//     }
//     document.getElementById('res').innerText = check;

// }


// function random() {

//     var randomNumber = Math.random();

//     document.getElementById('res').innerText = randomNumber;

// }

// var date = new Date().toDateString();

// function displayTime(){
//     var dateTime = new Date();
//     var hrs = dateTime.getHours();
//     var minutes = dateTime.getMinutes();
//     var seconds = dateTime.getSeconds();
//    var session = document.getElementById('session');

//     if(hrs >= 12){
//         session.innerHTML = 'PM'
//     }else{
//         session.innerHTML = "AM"
//     }

//     document.getElementById('hrs').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = minutes;
//     document.getElementById('seconds').innerHTML = seconds;

// }

// setInterval(displayTime, 1);

async function callApi(){
    var data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    data = await data.json();
    console.log(data);
    document.getElementById('res').innerHTML = data.map((i)  =>
    `
    <div> 
    <image src = ${i.image} />
    <h2> ${i.name} </h2>
    <p> Price: $ ${i.current_price} </p>
    <p> Market Cap: $ ${i.market_cap} </p>
    <p> 24 hourse: ${i.price_change_percentage_24h} % </p>
    </div>
    `
    )
}

callApi();
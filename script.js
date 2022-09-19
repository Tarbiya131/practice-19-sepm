// // let now = new Date()
// // // console.log(now.getFullYear())
// // // console.log(now.getMonth()+1)
// // // console.log(now.getDay())
// // // console.log(now.getDate())
// // // console.log(now.getMinutes())
// // // console.log(now.getSeconds())
// // // console.log()

// let now = new Date()
// let arr=['Jan','Fev','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// console.log(`${now.getUTCHours()}:${now.getUTCMinutes()},${now.getUTCDate()} ${arr[now.getUTCMonth()]}${now.getFullYear()}`)

// now.setFullYear(2021,4-1,14,)
// console.log(now)

// function sayHi() {
//     console.log("Hello Honey");
//   }
  
//   setTimeout(sayHi, 2000);
//   function sayGoodbye() {
//     console.log("Good Bye!");
//   }
  
//   setInterval(sayGoodbye, 2000);

//   function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
//     return days[date.getDay()];
//   }
  
// //   let date = new Date(2015, 0, 7); 
// //   console.log( getWeekDay(date) ); 

// function getDaysInMonths(month,year){
//     return new Date(year, month, 0).getDate();

// };
// console.log(getDaysInMonths(12, 2022));
// // console.log(getDaysInMonths(6, 2022));

// function getSeconds(month,day){
//     console.log(new Second(day,month,0).getSeconds())
// }
// getSeconds()

// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//     let diff = tomorrow - now; 
//     return Math.round(diff / 1000);
//   }
//    console.log(getSecondsToTomorrow())

//    console.log(Math.PI)

// class auto{
//     function car(name, model, release,speed){
//  this.name="Kia";
//     this.model="X-Line";
//        this.release=2021;
//             this.speed="60km/h"
//     }
        
//     }{
//         console.log(`${this.name} moving left`);
//                 }


//  function arraySum(arr) {
//        var result=0
//         for (var i = 0; i < arr.length; i++){
//          var result=result+arr[i]
//       }
//                   return result
//               }
//     console.log(arraySum([1,2,3,4,10,11]))
//     console.log(arraySum([1,2,3,4,10,11]))


  
function staircase(n) {
    let str = "";
    for (let j = n; j > 0; j--) {
    for (let i = 1; i <= n; i++) {
    if (i < j) {
    str += " ";
    continue;
    }
    str += "#";
    }
    if (j === 1) {
    continue;
    }
    str += " n";
    console.log(str);
    
    }}
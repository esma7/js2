// 1) for ile quracaginiz task
// *
// **
// ***
// ****
// *****

// 2) for ile quracaginiz task
// *****
// ****
// ***
// **
// *

//3) toplayan bolen vuran  cixan parametrli  js funksiyalarin yaradin

//4) Ədədin faktorialını hesablayan funksiyanı yazın. 
// Funksiya n ədədini götürməli və n deməlidir! Qaytarmalıdır (n faktorial)
//  For və ya while loopundan istifadə edin.

// let newArray= [10,1,2,3,8,9,99,77,44,5];
//5) Massivdə ən böyük dəyəri tapan funksiyanı yazın. 
// Funksiya ədədlər massivi götürməli və massivdəki ən böyük ədədi qaytarmalıdır.
//  Bunu for və ya while loopundan istifadə edərək həll edin.



//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tapsiriq 1


// for(let i = 1; i<6 ; i++){
//     for(let j= 0; j<i; j++){
//         document.write("*")
//     }
//     document.write("<br>");
// }


////for(let i = 0; i<6; i++){
////   for(let j = 0; j<6; j++){
////        document.write("*" * i)
/////   }
//// document.write("<br>")   
////}


//Tapsiriq 2

// for (let i = 5; i > 0; i--){
//     for(let j = 0; j<i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }



// Tapsiriq 3



// function calculator(a, b, type) {
//     if (type == "topla") {
//         let calc = a + b;
//         console.log(calc);
//     }
//     if (type == "cixma") {
//         let calc = a - b;
//         console.log(calc);
//     }
//     if (type == "vurma") {
//         let calc = a * b;
//         console.log(calc);
//     }
//     if (type == "bolme") {
//         let calc = a / b;
//         console.log(calc);
//     }
// }

// calculator(5,4,"bolme");


// Tapsiriq 4


// let number = +prompt("Eded daxil edin");
// let factor= 1;

// function factorial(item){
//     for(let i= 1; i<=item; i++){
//         factor = factor * i; 
        
//     }
//     console.log(factor);
// }

// factorial(number);


// Tapsiriq 5


let newArray= [10,1,2,3,8,9,99,778,44,5];

let numEn = newArray[0];



    for(let i= 0; i < newArray.length; i++){

        if(numEn < newArray[i]){

            numEn = newArray[i];
        }
    }


console.log(numEn);








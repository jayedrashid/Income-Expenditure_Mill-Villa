function add1() {
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    num3 = parseInt(myform.num3.value);
    num4 = parseInt(myform.num4.value);
    num5 = parseInt(myform.num5.value);
    num6 = parseInt(myform.num6.value);
    result = num1 + num2 + num3 + num4 + num5 + num6 + 100;
    myform.result.value = result;
}

function add2() {
    num7 = parseInt(myform.num7.value);
    num8 = parseInt(myform.num8.value);
    num9 = parseInt(myform.num9.value);
    num10 = parseInt(myform.num10.value);
    num11 = parseInt(myform.num11.value);
    num12 = parseInt(myform.num12.value);
    num13 = parseInt(myform.num13.value);
    num14 = parseInt(myform.num14.value);
    num15 = parseInt(myform.num15.value);
    num16 = parseInt(myform.num16.value);
    num17 = parseInt(myform.num17.value);
    num18 = parseInt(myform.num18.value);
    result2 = num7 + num8 + num9 + num10 + num11 + num12  + num13  + num14  + num15  + num16  + num17  + num18 - 100;
    myform.result2.value = result2;
}


function subtract() {
    result3 = result - result2;
    myform.result3.value = result3;
}





function add3() {
    num19 = parseInt(myform.num19.value);
    result3 = Math.abs(-result3);
    result4 = result3 + num19;
    myform.result4.value = result4;
}





function myWholePage() {
    window.print();
}

function myfun(paraValue) {
    const backup = document.body.innerHTML;
    const divContent = document.getElementById(paraValue).innerHTML;
    document.body.innerHTML = divContent;
    window.print();
    document.body.innerHTML = backup;
}

// function multiply() {
//     num1 = parseInt(myform.num1.value);
//     num2 = parseInt(myform.num2.value);
//     num3 = parseInt(myform.num3.value);
//     num4 = parseInt(myform.num4.value);
//     result3 = num1 * num4;
//     myform.result3.value = result3;
// }

// function divide() {
//     num1 = parseInt(myform.num1.value);
//     num2 = parseInt(myform.num2.value);
//     num3 = parseInt(myform.num3.value);
//     num4 = parseInt(myform.num4.value);
//     result4 = num1 / num4;
//     myform.result4.value = result4;
// }

function si() {
    var F = parseInt(document.getElementById("F").value);
    var A = parseInt(document.getElementById("A").value);
    var D = parseInt(document.getElementById("D").value);
    var I = parseFloat(document.getElementById("I").value);
    var duration = document.getElementById("duration").value;

    T = F - D;

    if (duration === "Each year") {
        eachyearfn(F, A, D, I, T);

    }

    else if (duration === "Each month") {
        eachmonthfn(F, A, D, I, T);

    }

    else if (duration === "Each week") {
        eachweekfn(F, A, D, I, T);

    }

    else
        alert("error");

}

function eachyearfn(F, A, D, I, T) {

    if (I <= 0) {
        var si = T / A;
    }
    else {
        c = (T * I / (A * 100)) + 1;
        d = (1 + (I / 100));
        var si = Math.log(c) / Math.log(d);
    }

    // y = new Date().getFullYear();
    // result1 = y + parseInt(si);

    //getting decimal number only

    si1 = si.toFixed(1);
    let string = si1.toString();
    let array = string.split('.');
    let result2 = +array[1];
    if(result2 <= 2){
        result2 = result2
        }
    else{
         result2 = result2 - 3 
        }

    result = 'It will take until \t' + parseInt(si) + '\tyear and\t' + result2 + '\tmonth to save \t' + F + '\tat £\t' + A + '\tper year\t';

    document.getElementById("res").innerHTML = result;
}

function eachmonthfn(F, A, D, I, T) {

    
    if (I <= 0) {
        I= I/12 ;
        var si = (T /A)/12;
    }
    else {
        I= I/12 ;
        c = (T * I / (A * 100)) + 1;
        d = (1 + (I / 100));
        var si = (Math.log(c) / Math.log(d))/12;
    }

    // y = new Date().getFullYear();
    // result1 = y + parseInt(si);

    //getting decimal number only

    si1 = si.toFixed(1);
    let string = si1.toString();
    let array = string.split('.');
    let result2 = +array[1];
    result2=result2 + 1

    result = 'It will take until \t' + parseInt(si) + '\tyear and\t' + result2 + '\tmonth to save \t' + F + '\tat £\t' + A + '\tper month\t';

    document.getElementById("res").innerHTML = result;
}

function eachweekfn(F, A, D, I, T) {
 
     if (I <= 0) {
         var si = (T /A)/52;
     }
    // else
    //  if(I >= 0 && I <= 1 ) {
    //     I = 1/52;
    //     c = (T * I / (A * 100)) + 1;
    //     d = (1 + (I / 100));
    //     var si = (Math.log(c) / Math.log(d))/52;
    // }
    else {
        I = I/53;
        c = (T * I / (A * 100)) + 1;
        d = (1 + (I / 100));
        var si = (Math.log(c) / Math.log(d))/52;
    }

    // y = new Date().getFullYear();
    // result1 = y + parseInt(si);

    //getting decimal number only

    si1 = si.toFixed(1);
    let string = si1.toString();
    let array = string.split('.');
    let result2 = +array[1];
    result2 = result2 + 2

    result = 'It will take until \t' + parseInt(si) + '\t year and\t' + result2 + '\tmonth to save \t' + F + '\tat £\t' + A + '\tper week\t';

    document.getElementById("res").innerHTML = result;
}


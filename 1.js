// задание 1

if (typeof(Storage) !== "undefined") {
    console.log('отлично, localStorage в браузере поддерживается')
} else {
    console.log('к сожалению, localStorage в браузере не поддерживается')
}

// задание 2
var count = 0;
document.getElementById('switch_theme').href = localStorage.style || "styles/lime.css";
document.getElementById('task2').onclick = function() {
    if (count % 2 == 0) {
        localStorage.style = "styles/orange.css";
    } else {
        localStorage.style = "styles/lime.css";
    }
    count += 1;
    document.getElementById('switch_theme').href = localStorage.style;
};


// задание 3
document.getElementById('result3').innerHTML = localStorage.arr || '';
document.getElementById('task3').onclick = function() {
    var arr = ['one', 2, 'three', 4, 'last'];

    localStorage.arr = arr;

    document.getElementById('result3').innerHTML = localStorage.arr

}

// очиcтка локального хранилища

document.getElementById('clearing').onclick = function() {
    localStorage.clear();
    document.getElementById('result3').innerHTML = '';
}
// задание 4
document.getElementById('task4').onclick = function() {

    function func() {
        if (localStorage.bool !== 'false') {
            document.getElementById('result4').style.display = 'block'
        }
    }
    setTimeout(func, 4000);
}
document.getElementById('but4').onclick = function() {
    document.getElementById('result4').style.display = 'none'
    if (document.getElementById('agr').checked) {
        localStorage.bool = false;
    }
}

document.getElementById('but5').onclick = function() {

    var output = '';

    for (var key in localStorage) {
        output = output + (key + ' :' + localStorage[key]) + '<br>';
    }
    document.getElementById('result5').innerHTML = output
}

document.getElementById('but5_1').onclick = function() {
    document.getElementById('result5').innerHTML = '';
}
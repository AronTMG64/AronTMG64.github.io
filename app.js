function add() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);

    let add = a + b;

    document.querySelector("#result").innerHTML = add;
}

function min() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);

    let min = a - b;

    document.querySelector("#result").innerHTML = min;
}

function div() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);

    let div = a / b;

    document.querySelector("#result").innerHTML = div;
}

function mul() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);

    let mul = a * b;

    document.querySelector("#result").innerHTML = mul;
}
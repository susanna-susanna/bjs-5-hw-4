function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
   // код для задачи №1 писать здесь
    //return totalAmount;
    let P = 1/100/12* percent;
    date = (new Date(2020, 5, 15).getTime() - Date.now()) / (1000*60*60*24*30);
        return ((amount - contribution) * (P + P/(((1+P)**date)-1))) * date;
}
calculateTotalMortgage(10, 0, 20000, (new Date(2020, 5, 15).getTime() - Date.now()));

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    if (Boolean(name) === false || name == null || name == undefined) {
        return `Привет, мир! Меня зовут Аноним`;
    } else {
        return `Привет, мир! Меня зовут ${name}`;
    }
}
getGreeting("Vasya");

function sum() {
    let num1 = +document.querySelector('#num1').value
    let num2 = +document.querySelector('#num2').value
    let result = num1+num2
    console.log(result)
    document.querySelector('#result').innerHTML = result
}
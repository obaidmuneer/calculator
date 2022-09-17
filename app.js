function number(num){
    let oldNum = document.querySelector('#screen').value
    document.querySelector('#screen').value = oldNum + num
}

function deleteIt(){
    // console.log(oldNum.substr(0,oldNum.length-1));
    let oldNum = document.querySelector('#screen').value
    extractedVal = oldNum.substr(0,oldNum.length-1)
    document.querySelector('#screen').value = extractedVal

}

function calculate() {
    let oldNum = document.querySelector('#screen').value
    
    // console.log(eval(oldNum))
    document.querySelector('#screen').value = '='+eval(oldNum)
    // document.querySelector('#result').innerHTML = result
}

function validador(){
    let ca = document.getElementById('ca')
    let cb = document.getElementById('cb')
    let res = document.getElementById('res')

    ca = Number(ca.value)
    cb = Number(cb.value)

    res.innerHTML = ''
    
    if (ca < cb){
        res.innerHTML = `Parabéns, o número ${cb} é maior que ${ca}! \u{1F600} `
        res.style.backgroundColor = 'green';
        res.style.boxShadow = '3px 3px 9px rgba(0, 0, 0, 0.603)';
    } else {
        res.innerHTML = `Infelizmente o número ${cb} é menor que ${ca}, tente novamente! \u{26D4}`
        res.style.backgroundColor = 'red';
        res.style.color = 'white';
        res.style.boxShadow = '3px 3px 9px rgba(0, 0, 0, 0.603)';
    }if(ca == cb){
        res.innerHTML = `Números iguais tente escolher números diferentes para os campos. \u{26A0}`
        res.style.backgroundColor = 'yellow';
        res.style.color = 'black';
        res.style.boxShadow = '3px 3px 9px rgba(0, 0, 0, 0.603)';
    }
}
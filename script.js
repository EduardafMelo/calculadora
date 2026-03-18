function appendToDisplay(valor) {
    document.getElementById('display').value += valor
}

function clearDisplay() {
    document.getElementById('display').value = ''
}

function calculate() {
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Erro'
    }
}

function back () {
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

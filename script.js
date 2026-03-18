function appendToDisplay(valor) {
    document.getElementById('display').valor += value
}

function clearDisplay() {
    document.getElementById('display').value = ''
}

function calculate() {
    const display = document.getElementById('display')
    try {
        display.value = eval(value.value)
    } catch (error) {
        display.value = 'Erro'
    }
}

function back () {
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}
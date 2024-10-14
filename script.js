const output = document.getElementById("output")

function getButtonEvent(btn) {
    let text = output

    if (Number.isInteger(btn)) {
       text.innerHTML = text.innerHTML+btn
    } else {
        if (btn === 'clear') {
            text.innerHTML = ""
        } else if (btn === 'delete') {
            text.textContent = text.slice(0, text.textContent.length-1)
        } else if (btn === 'divide'){
            text.innerHTML = text.innerHTML+"&divide;"
        } else if (btn === 'times')  {
            text.innerHTML = text.innerHTML+"x"

        } else if (btn === 'sub') {
            text.innerHTML = text.innerHTML+'-'

        } else if (btn === "add") {
            text.innerHTML = text.innerHTML+"+"

        } else if (btn === "equal") {
            let equation = text.innerHTML
            let divider = equation.replace("÷", "/")
            let timer = divider.replace('x', '*')
            let result = eval(timer)
            text.innerHTML = result
        } else if (btn === 'dot') {
            text.innerHTML = text.innerHTML+"."
        }
     } 
}


function editTask(event) {
    let spanTarget = event.target;
    const entrada = document.createElement('input');
    entrada.value = spanTarget.innerText;
    spanTarget.style.display = 'none';
    entrada.addEventListener('keydown', enterKey);
    spanTarget.parentNode.insertBefore(entrada, spanTarget);
}

function enterKey(event) {
    let entrada = event.target;
    let spanTarget = entrada.parentNode.querySelector('span');
    if (event.key == "Enter") {
        spanTarget.innerText = entrada.value;
        spanTarget.style.display = 'inline';
        entrada.style.display = 'none';
    }
}
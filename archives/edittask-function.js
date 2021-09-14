

function editTask(event) {
    let spanTarget = event.target;
    const entrada = document.createElement('input');
    entrada.value = spanTarget.innerText;
    spanTarget.style.display = 'none';
    entrada.addEventListener('keydown', enterKey);
    entrada.addEventListener('keydown', escapeKey);
    spanTarget.parentNode.insertBefore(entrada, spanTarget);
}

function enterKey(event) {
    let newInput = event.target;
    let spanTarget = newInput.parentNode.querySelector('span');
    if (event.key == "Enter") {
        if (newInput.value == '') {
            spanTarget.style.display = 'inline';
            newInput.style.display = 'none';
        } else {
            let positionItem = list.indexOf(newInput.value);
            if (positionItem > -1 && spanTarget.innerText != newInput.value) {
                alert('Essa tarefa já existe. \n\nPressione "Ok" ou "Enter" e depois "Esc" caso queira mantê-la na lista.\n\nCaso queira apagar a tarefa, clique no botão " - ".');    
            } else {
                positionItem = list.indexOf(spanTarget.innerText);
                spanTarget.innerText = newInput.value;
                spanTarget.style.display = 'inline';
                newInput.style.display = 'none';
                list.splice(positionItem, 1, spanTarget.innerText);
            }
        }
    }
}

function escapeKey(event) {
    let newInput = event.target;
    let spanTarget = newInput.parentNode.querySelector('span');
    if (event.key == "Escape") {
        spanTarget.style.display = 'inline';
        newInput.style.display = 'none';
    }
}


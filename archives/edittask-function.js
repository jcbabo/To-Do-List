function editTask(event) {
    let spanTarget = event.target;
    const entrada = document.createElement('input');
    entrada.value = spanTarget.innerText;
    spanTarget.style.display = 'none';
    entrada.addEventListener('keydown', function(event){
        if (event.key == "Enter") {
            spanTarget.innerText = this.value;
            spanTarget.style.display = 'inline';
            this.style.display = 'none';
        }
    })
    spanTarget.parentNode.insertBefore(entrada, spanTarget);

    

}

/*
-pegar o valor do textTask (spanTarget)
-por o valor do input pra ser o mesmo do spanTarget (não entendi)
esconder os filhos da li (display: none)
dar um append na li para renderizar o input
implementar a função do eventListener para quando o usuário clicar "enter" realizar os passos:
    pegar o valor do input
    por o valor do spanTarget para o novo valor do input
    remover o input da li
mostrar os elementos da li que estavam escondidos (display: inline)
*/
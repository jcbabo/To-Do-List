function deleteTask(event) {                                                //chama o evento para apagar um item da lista
    let buttonTarget = event.target;                                        //cria uma variável que recebe o evento alvo de clique como valor
    let listElementDel = document.getElementById('ul');                        //cria uma variável que recebe o elemento 'ul' do html como valor
    let taskToDelete = buttonTarget.parentNode;                             //cria uma variável que recebe como valor o retorno da variável-pai 'buttonTarget'
    listElementDel.removeChild(taskToDelete);                                  //coloca um método na variável 'listElement' para remover um elemento filho resultado da variável 'taskToDelete'
}
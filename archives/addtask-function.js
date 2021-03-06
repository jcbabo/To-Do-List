

var list = [];

function add() {
    if (document.querySelector('input.textArea').value !== '') {            //condicional para que a função só seja chamada caso o valor do input seja diferente de vazio
        let listElement = document.getElementById('ul');                    //põe o elemento 'ul' como uma variável (newItem)
        let task = document.createElement('li');                            //cria um novo elemento 'li' e põe como valor da variável task
        let taskText = document.createElement('span');
        taskText.innerText = document.querySelector('input.textArea').value;//modifica a estrutura html adicionando o valor colocado no input (textArea) à variável task
        taskText.classList.add('liItem');
        if (list.indexOf(taskText.innerText) > -1) {
            alert("Essa tarefa já existe.");
        } else {
            task.appendChild(taskText);
            list.push(taskText.innerText);
            taskText.onclick = editTask;
            let checkbox = document.createElement('input');                     //cria um input e põe como valor na variável checkbox
            checkbox.setAttribute('type', 'checkbox');                          //configura o atributo/tipo como "checkbox"
            checkbox.addEventListener('change', lineThrough);                   //"ouve" a mudança de estado da variável checkbox quando a caixa é marcada ou desmarcada. A função vazia (callback) é chamada como um elemento de html
            
            checkbox.classList.add('squareBox');                                //adiciona uma classe de CSS para que o quadrado do checkbox seja estilizado
            task.classList.add('itemList');                                     //adiciona uma classe de CSS para que o conteúdo da variável task seja estilizado 
            task.prepend(checkbox);                                             //o método prepend põe o parâmetro antes da variável/elemento pois, por padrão, texto sempre vai ser mostrado antes
            listElement.appendChild(task);                                      //faz com que a variável task seja adicionada em forma de lista conforme vai sendo preenchida repetidamente

            let deleteButton = document.createElement('button');                //cria uma variável que recebe como valor um botão para apagar a tarefa
            deleteButton.innerText = "-";                                       //configura o sinal de '-' como o botão do html
            deleteButton.setAttribute('type', 'button');                        //configura o tipo 'button' para o botão
            deleteButton.classList.add('delButton');                            //adiciona uma classe para que o botão seja estilizado por CSS
            deleteButton.onclick = deleteTask;                                  //ou 'deleteButton.addEventListener('click', deleteTask)' que funciona de igual modo

            task.appendChild(deleteButton);
            document.querySelector('input.textArea').value = '';                //faz com que a área de input (textArea) fique em branco novamente para receber um novo valor
            console.log(list);
        }
    }
}

function lineThrough(event) { 
    let checkbox = event.target;
    let span = checkbox.parentNode.querySelector('span');
    if (checkbox.checked == true) {                                         //condicional para a variável checkbox. O "this" é aceito aqui por conta da função callback
        span.style.textDecoration = 'line-through';                         //se a condição for verdadeira, configura um textDecoration no valor da variável task
    } else {
        span.style.textDecoration = 'none';                                 //se for falsa, o "textDecoration" é configurado para "none"
    }
}
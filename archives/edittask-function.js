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
window.addEventListener ('load', function() {
    var init = document.getElementById('init');
    var addList = document.getElementById('add-list');
    init.addEventListener ('click', function() {
        addList.classList.remove('disabled');
    });

    addList.addEventListener ('click', function() {
        var board = document.getElementById('board-section');
        if (init.value !== ''){
            var newList = document.createElement('div');
            newList.textContent = init.value;
            board.appendChild(newList);
            newList.classList.add('new-list');
            init.value = '';
            addList.classList.add('disabled');
            board.classList.remove('disabled');
            };


        newList.addEventListener ('dblclick', function() {
            var answer = document.createElement('div')
            newList.appendChild(answer);
            var newText = document.createElement('textarea');
            newText.placeholder = 'Agregar tarea';
            answer.appendChild(newText);
            var secondBtn = document.createElement('button');
            secondBtn.textContent = 'Añadir';
            answer.appendChild(secondBtn);
            secondBtn.addEventListener('click', function() {
                if (newText.value !== '') {
                    var newAnswer = document.createElement('p');
                    newAnswer.textContent = newText.value;
                    newList.appendChild(newAnswer);
                    newText.value = '';
                };
            });
        });
    });


});
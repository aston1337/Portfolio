'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', function(){
        console.log("button is clicked");

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    btnCloseModal.addEventListener('click', closeModal);     //Без кавычек, если поставить кавычки - код выполниться сразу по запуску строки, а не по клику!
    overlay.addEventListener('click',closeModal);

    document.addEventListener('keydown', function(e){
        if (e.key === "Escape" && !modal.classList.contains('hidden'))
            closeModal();
    })
}
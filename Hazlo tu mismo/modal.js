const modal = document .getElementById ('modal' );
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const closeModalX = document.querySelector(".close-modal-x");

document.addEventListener('keydown',(e)=>{
    console.log(e)
    if(e.key === 'Escape'){
        hideModal.click()
    }
})

const showModal = () => {
    modal.style.display = 'flex';

}
const hideModal = () => {
    modal.style.display = 'none';

}

openModal.addEventListener("click",showModal);
closeModal.addEventListener("click",hideModal);
closeModalX.addEventListener("click",hideModal);


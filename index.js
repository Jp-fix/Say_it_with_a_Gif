import { gifData } from "/dataGif.js";

const gifMessageSelector = document.getElementById("gif-message-selector")
const sendBtn = document.getElementById("send-btn")
const modalContainer = document.getElementById("modal-container")
const modalContent = document.getElementById("modal-content")
const closeModalContainer = document.getElementById("close-modal-container")

gifMessageSelector.addEventListener("change", messageSelection)
sendBtn.addEventListener("click", renderMessageGif)
closeModalContainer.addEventListener("click", closeModal)

function messageSelection(){

    const selectedMessage = gifMessageSelector.value
    return selectedMessage
}

function matchingMessageAndGif(){
    const messageToGif = messageSelection()

    const gif = gifData.filter(function(matching){
        return matching.tags.includes(messageToGif)
    })

  return gif
}

function showModal(){
    modalContainer.style.display="flex"
    }

function closeModal(){
    modalContainer.style.display="none"
}
function renderMessageGif(){
    matchingMessageAndGif()
    showModal()
    const selectedGif = matchingMessageAndGif()
    
    modalContent.innerHTML = 
    `
        <div class="result-message-gif">
            <img src= "${selectedGif[0].url}" alt= "${selectedGif[0].alt}">
        </div> 
    ` 
}

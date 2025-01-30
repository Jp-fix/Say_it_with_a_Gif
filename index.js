import { gifData } from "/dataGif.js";

const gifMessageSelector = document.getElementById("gif-message-selector")
const sendBtn = document.getElementById("send-btn")
const modalContainer = document.getElementById("modal-container")
const modalContent = document.getElementById("modal-content")
const closeModalContainer = document.getElementById("close-modal-container")
const shareBtn = document.getElementById("share-btn")
const downloadBtn = document.getElementById("download-btn")
const downloadInner = document.getElementById("download-inner")

gifMessageSelector.addEventListener("change", messageSelection)
sendBtn.addEventListener("click", renderMessageGif)
closeModalContainer.addEventListener("click", closeModal)
shareBtn.addEventListener("click",shareGif)

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
    downloadInner.innerHTML =
    `
            <label for="download-btn">Enregistrer</label>
            <a href="${selectedGif[0].url}" download>
            <button class="download-btn" id="download-btn"><img  src="logo/Download Circle Icon.svg" alt="logo-download-gif">
            </a>
        </button>
    `
}

function shareGif(){
    const selectedGif = matchingMessageAndGif()
    navigator.share({
        url:selectedGif[0].url,
        title: selectedGif[0].name
    })
}
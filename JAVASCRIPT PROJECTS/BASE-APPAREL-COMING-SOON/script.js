const errorDiv = document.getElementById('error')
const emDiv = document.getElementById('error-msg')
const pinkbox = document.getElementById('pinkbox')
const mailboxInput = document.getElementById('mailbox')

pinkbox.addEventListener('click', function(event) {

    const mailbox = mailboxInput.value.trim()
    const mailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (mailbox === '')
    {
        emDiv.textContent = "Email is required!"
        event.preventDefault()
    }

    else
    {
        emDiv.textContent = ''
    }
})
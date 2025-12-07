const buttons = document.querySelectorAll('.buttons')
let rate;
buttons.forEach(button => {
    button.addEventListener('click', () =>
    {
        rate = button.innerHTML
    })
    
});

const resultDiv = document.getElementById('result')

function displayCard ()
{
    const resultSubDiv = document.createElement('div')
    resultSubDiv.classList.add('resultSubDiv')
    const thankImage = document.createElement('img')
    thankImage.src = './ASSETS/illustration-thank-you.svg'
    thankImage.alt = 'Thank You'
    thankImage.classList.add('thank-image')
    const ratePara = document.createElement('p')
    ratePara.textContent = `You selected ${rate} out of 5 `
    ratePara.classList.add('rate-para')
    const thankHead = document.createElement('h1')
    thankHead.textContent = 'Thank You!'
    thankHead.classList.add('thank-head')
    const description = document.createElement('p')
    description.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    description.classList.add('description')
    resultSubDiv.append(thankImage,ratePara,thankHead,description)
    resultDiv.appendChild(resultSubDiv)
}

const submitButton = document.getElementById('submit')
const submissionDiv = document.getElementById('submission')
const resultsDiv = document.getElementById('result')

submitButton.addEventListener('click', () =>
{
    submissionDiv.style.display = 'none'
    resultsDiv.style.display = 'block'
})
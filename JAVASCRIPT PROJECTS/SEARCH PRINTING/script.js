function myprint()
{
    const textval = document.getElementById('inp')
    const printval = document.getElementById('para')
    printval.textContent = textval.value
    printval.classList.add('dark')
    printval.classList.toggle('dark')
    printval.style.fontSize='78px'
}



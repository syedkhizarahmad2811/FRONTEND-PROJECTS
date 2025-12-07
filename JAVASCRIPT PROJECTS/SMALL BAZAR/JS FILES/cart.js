let cartitems = JSON.parse(localStorage.getItem('cartitems'))
console.log(cartitems)
const maindiv = document.getElementById('cartmain')
function displaydata()
{
    cartitems.forEach((item) =>
    {
        const div = document.createElement('div')
        div.classList.add('item')
        const image = document.createElement('img')
        image.src = item.thumbnail
        image.alt = item.title
        const title = document.createElement('h3')
        title.textContent = item.title
        const price = document.createElement('p')
        price.textContent = 'price: ₹'+item.price
        const removebutton = document.createElement('button')
        removebutton.textContent = '❎'
        removebutton.addEventListener('click', () => removecart(ind))
        div.append(image,title,price,removebutton)
        maindiv.appendChild(div)
    })
}
displaydata()
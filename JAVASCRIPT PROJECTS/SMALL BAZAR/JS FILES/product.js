const productdiv = document.getElementById('product')
const leftdiv = document.getElementById('leftdiv')
const rightdiv = document.getElementById('rightdiv')

const urldata = new URLSearchParams(window.location.search)
const pid = urldata.get('pid')
function fetchdata(id)
{
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => displaydata(data))
}
fetchdata(pid)
const displaydata = (data) =>
{
    const image = document.createElement('img')
    image.src = data.thumbnail
    image.alt = data.title
    leftdiv.appendChild(image)
    const title = document.createElement('h3')
    title.textContent = data.title
    const desc = document.createElement('p')
    desc.textContent = data.description
    const price = document.createElement('p')
    price.textContent = 'price₹'+data.price
    const addcartbutton = document.createElement('button')
    addcartbutton.textContent = 'Add to cart'
    addcartbutton.addEventListener('click',() => addcart(data))
    rightdiv.append(title,desc,price,addcartbutton)
}
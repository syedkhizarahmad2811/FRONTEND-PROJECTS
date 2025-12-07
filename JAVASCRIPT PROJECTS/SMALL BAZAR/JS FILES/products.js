const productsdiv = document.getElementById('products')
const fetchdata = () =>
{
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
    .then((data) => displaydata(data.products)) 
}
fetchdata()
const displaydata=(arr)=>
{
    arr.forEach((pro) =>
    {
        const productdiv = document.createElement('div')
        productdiv.classList.add('card', 'p-5')
        const productimage = document.createElement('img')
        productimage.src = pro.thumbnail
        productimage.alt = pro.title
        const producttitle = document.createElement('h3')
        producttitle.textContent = pro.title
        const productlink = document.createElement('a')
        productlink.href = `./product.html?pid=${pro.id}`
        productlink.append(producttitle)
        const productprice = document.createElement('p')
        productprice.textContent = 'price: ₹'+pro.price
        const productaddcart = document.createElement('button')
        productaddcart.textContent = 'Add To Cart' 
        productaddcart.addEventListener('click',() => addcart(pro))   
        productdiv.append(productimage,  productlink, productprice, productaddcart)
        productsdiv.appendChild(productdiv)
    });
}


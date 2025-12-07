let cartitems = []
let c = 0 || localStorage.getItem('cartcount')
document.getElementById('count').textContent = c
function addcart(obj)
{
    cartitems.push(obj)
    c++
    document.getElementById('count').textContent = c
    localStorage.setItem('cartitems',JSON.stringify(cartitems))
    localStorage.setItem('cartcount',c)
    console.log(localStorage)
}
function removecart(ind){}
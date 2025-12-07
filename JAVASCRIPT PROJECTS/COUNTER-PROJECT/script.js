const countvalue = document.getElementById('count')
console.log(countvalue.textContent)
let c = 0
function incr()
{
    c++
    console.log(countvalue.textContent = c)
}


function decr()
{
    c--
    console.log(countvalue.textContent = c)
}

function res()
{
    c = 0
    console.log(countvalue.textContent = c)
}
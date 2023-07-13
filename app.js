const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '425a552e87msh57e76bc9bc96742p1eed6bjsnc355442ae696',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }

}


fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
    .then((response) => response.json())
    .then((jsonResponse) => renderProducts(jsonResponse.products))



function renderProducts(arrayOfProductObjs) {
    console.log(arrayOfProductObjs)


    const name = document.querySelector('h2')
    let productLabel = document.createElement('h3')
    productLabel = arrayOfProductObjs[12].name
    // productCode.innerText = 'Product Code'
    name.append(productLabel)

    const name2 = document.getElementById('2')
    let productLabel2 = document.createElement('h3')
    productLabel2 = arrayOfProductObjs[45].name
    name2.append(productLabel2)

    const name3 = document.getElementById('3')
    let productLabel3 = document.createElement('h3')
    productLabel3 = arrayOfProductObjs[24].name
    name3.append(productLabel3)
}

const allRemoveButtons = document.querySelectorAll('#rmv');

for (const rmvBttn of allRemoveButtons) {
    rmvBttn.addEventListener('click', (event) => {
        alert('Removing item');
        event.target.parentNode.parentNode.remove();
        //newItem.remove();
    })
}

let instockOrOutstock = true

const allInstockButtons = document.querySelectorAll('#stock')

for (const stockBttn of allInstockButtons) {
    stockBttn.addEventListener('click', () => {

        instockOrOutstock = !instockOrOutstock

        if (instockOrOutstock) {
            stockBttn.innerText = "InStock"
            stockBttn.style.backgroundColor = 'white'
        } else {
            stockBttn.innerText = "Out Of Stock"
            stockBttn.style.backgroundColor = 'red'
        }

    })
}

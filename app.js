const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '425a552e87msh57e76bc9bc96742p1eed6bjsnc355442ae696',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }

}


fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
    .then((response) => response.json())
    .then((jsonResponse) => renderProducts(jsonResponse.products[6]))


function renderProducts(arrayOfProductObjs) {
    let imageLink = arrayOfProductObjs.imageUrl
    // console.log(imageLink)
    const image = document.querySelector('.bag-with-text')
    let imageUrl = document.createElement('img')
    imageUrl.src = imageLink
image.append(imageUrl)

}


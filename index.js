//! Global Variables
const allItems = 'https://fakestoreapi.com/products';
const cart = [];


//! DOM
const itemDisplay = document.getElementById("sale-items");
const jewelery = document.getElementById('jewelery');
const electronics = document.getElementById('electronics');
const mensWear = document.getElementById(`men's clothing`);
const womensWear = document.getElementById(`women's clothing`);


//! Functions 
const removeElements = dickfer => {
    while (dickfer.firstChild) {
        dickfer.removeChild(dickfer.firstChild);
    }
}

const displayCards = (storeItems) => {
    
    removeElements(itemDisplay);

    storeItems.map((obj) => {
        
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let body = document.createElement('div');
        let title = document.createElement('h5');
        let p = document.createElement('p');
        let btn1 = document.createElement('a');
        
        div.className = 'col';
        card.className = 'card';
        img.src = obj.image;
        img.alt = obj.title;
        body.className = 'card-body';
        title.className = 'card-title';
        title.textContent = obj.title;
        p.className = 'card-text';
        btn1.className = 'btn btn-outline-primary';
        btn1.textContent = "Add to Cart";
        btn1.onclick = () => {
            let item = {
                id: obj.id,
                title: obj.title,
                price: obj.price,
                quantity: 1,
            }
            cart.push(item);
            console.log(cart);
        }
        
        
        p.appendChild(btn1);
        body.appendChild(title);
        body.appendChild(p);
        card.appendChild(img);
        card.appendChild(body);
        itemDisplay.appendChild(card);
    });
};



















//! Event listeners     //dept 
const fakeStore = async(endPoint) => {
    try {
        if (endPoint) {
        let res = await fetch(`${allItems}${endPoint}`);
        let results = await res.json()
        displayCards(results);
        console.log(results);
    } else {
        let res = await fetch(allItems);
        let results = await res.json();
        displayCards(results);
    }
    } catch (err) {
        console.error(err);
    }
    
    
}

window.onload = function() {
    fakeStore("");
}
jewelery.addEventListener('click', (e) => {
    fakeStore('/category/jewelery')
});

electronics.addEventListener('click', (e) => {
    fakeStore('/category/electronics')
});
mensWear.addEventListener('click', (e) => {
    fakeStore(`/category/men's clothing`)
});
womensWear.addEventListener('click', (e) => {
    fakeStore(`/category/women's clothing`)
});

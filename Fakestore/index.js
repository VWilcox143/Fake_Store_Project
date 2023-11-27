//! Global Variables
const endPoint = 'https://fakestoreapi.com/products';
const storeItems = [];


//! DOM
const itemDisplay = document.getElementById("sale-items");






//! Functions 
const displayItems = () => {
    
    storeItems.map(obj => {
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let body = document.createElement('div');
        let title = document.createElement('h5');
        let p = document.createElement('p');
        let btn1 = document.createElement('a');
        let btn2 = document.createElement('a');
        let btn3 = document.createElement('a');

        div.className = 'col';
        card.className = 'card';
        img.src = obj.img;
        img.alt = obj.title;
        body.className = 'card-body';
        title.className = 'card-title';
        title.textContent = obj.title;
        p.className = 'card-text';
        btn1.href = obj.description;
        btn1.textContent = "Description";
        btn2.href = obj.price;
        btn2.textContent = "Price";
        btn3.href = '_blank';
        btn3.textContent = "Add to Cart";
        
        
        p.appendChild(a);
        body.appendChild(title);
        body.appendChild(p);
        card.appendChild(img);
        card.appendChild(body);
        itemDisplay.appendChild(card);
    });
};



















//! Event listeners
const fakeStore = async() => {
    try {
        let res = await fetch(endPoint);
        let results = await res.json();
        console.log(results);
        
        results.forEach(results => {
            let obj = {
                title: results.title,
                img: results.image,
                description: results.description,
                category: results.category,
                price: results.price,
            }
        });
        return storeItems.push(results);
        
        
    } catch (err) {
        console.error(err);
    };
}

//fakeStore();
console.log(storeItems);
addEventListener("load", fakeStore); 


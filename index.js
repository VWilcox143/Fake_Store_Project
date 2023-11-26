const endPoint = 'https://fakestoreapi.com/products';


const fakeStore = async() => {
    try {
        let res = await fetch(endPoint);
        let results = await res.json();
        console.log(results);
        
    } catch (err) {
        console.error(err);
    };
}

fakeStore();


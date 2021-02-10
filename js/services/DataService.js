const URL = 'http://localhost:4000/api/products';
export default {
    getProducts: async () => {    
         
        // const Request = getRequest(URL);
      
        // const response = await fetch(Request);

        // const data = await response.json()
        // console.log(data)
        const data = getProducts();
        return data;
        }
}

function getRequest (URL)
{
    const headers = new Headers();   
    headers.append('Content-Type', 'application/json');
    return  new Request(URL, {
	method: 'GET', 
	mode: 'no-cors', 
	redirect: 'follow',
	headers
    }); 
}


function getProducts(){
    return [
        {
            "name": "Bicicleta",
            "sale": true,
            "price": 230.15,
            "picture": "./images/bicicleta.jpeg",
            "tags": [ "lifestyle", "motor"]
        },
        {
            "name": "iPhone 3GS",
            "sale": false,
            "price": 550.00,
            "picture": "./images/iphone.jpeg",
            "tags": [ "lifestyle", "mobile"]

        },
        {
            "name": "Rain Boots",
            "sale": false,
            "price": 25.55,
            "picture": "./images/rain-boots.jpeg",
            "tags": [ "lifestyle"]

        }
    ]
}
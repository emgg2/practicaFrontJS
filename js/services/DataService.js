const URL = 'http://localhost:5000/api/products';
export default {
    getProducts: async () => {    
         const response = await fetch(URL);
         const data = response.json();
        return data;
        }
}

const URL = 'http://localhost:3000/api/products';
export default {
    getProducts: async () => {    
         const response = await fetch(URL);
         const data = response.json();
        return data;
        }
}

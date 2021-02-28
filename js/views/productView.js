export const productView = (product) => {

    let sale = "";
    let classValue = "";
  
    return `
    
    <div class = "box">       
        <a href="./edit-product.html?id=${product.id}" tag="Editar \"${product.name}\"">
        <img src="${product.picture}" alt="${product.name}">
        <div>
            <p class="tag">${product.tags}</p>
            <p>${product.name}</p>
            <p><b>${product.price}€</b></p>     
            <p class="${product.classSale}">${product.sale}</p>
        </div></a>
    </div>`;
};


export const productView = (product) => {
    let sale = "";
    let classValue = "";
    if(product.sale)
    {
         sale = "En venta";
         classValue = "sale";
    }else {
         sale = "Se busca";
         classValue = "lookingFor";
    }
    return `
    <div class = "product">
        <img src="${product.picture}" alt="${product.name}">
        <p class="tag">${product.tags.join(" ")}</p>
        <p>${product.name}</p>
        <p><b>${product.price}€</b></p>     
        <p class="${classValue}">${sale}</p>
    </div>`;
}
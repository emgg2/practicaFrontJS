export const productView = (product) => {

    let sale = "";
    let classValue = "";
    let deleteButtonHTML = "";
    if( product.canBeDeleted) {
        deleteButtonHTML = `<div class ="deletedButton" ><i class="fa fa-trash fa-lg" aria-hidden="true"></i></div>`
    }
    return `
    <div class = "box">
        ${deleteButtonHTML}
        <img src="${product.picture}" alt="${product.name}">
        <div>
            <p class="tag">${product.tags}</p>
            <p>${product.name}</p>
            <p><b>${product.price}€</b></p>     
            <p class="${product.sale}">${sale}</p>
        </div>
    </div>`;
};


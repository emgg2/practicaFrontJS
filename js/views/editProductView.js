export const editProductView = (product) => {
    let deleteButtonHTML = "";

    if( product.canBeDeleted) {
        deleteButtonHTML = `<a class="level-item" aria-label="reply">
          <span class="icon is-small">
            <i class="fa fa-trash fa-lg" aria-hidden="true"></i>  
          </span>
          </a>`;
    }
    
    return `
    <div class="box">
    <article class="media">
    <div class="media-left">
    <figure class="image is-square">
      <img src="${product.picture}" alt="${product.name}">
    </figure>
  </div>
  <div class="media-content">
    <div class="content">
      <table class="table">
        <tbody>
          <tr>
            <th>Descripcion: </th>                    
            <td>${product.name}</td>                    
          </tr>
          <tr>
            <th>Precio: </th>                    
            <td>${product.price}</td>                    
          </tr>
          <tr>
            <th>Tipo: </th>                    
            <td>${product.sale}</td>                    
          </tr>
          <tr>
            <th>Tags: </th>                    
            <td>${product.tags}</td>                    
          </tr>
        </tbody>
      </table>
      <nav class="level">
        <div class="level-left">
          ${deleteButtonHTML}
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fa fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fa fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
   
  </div>
  </article>
  </div>
   `;
};


export const navbarView = () => {    
    return `    
    <div class="logo"><a href="/">Nodepop</a></div> 
    
    <div class="container-buscador">
    <div class="buscador">
        <form action="index.html" method="GET"></form>
            <input type="search" name="input" alt="Texto de búsqueda">        
      </div>
    </div>
    <ul class="navbar-list">        
        <li class="navbar-item"><a href="#" name="close-session">Cerrar sesión</a></li>
    </ul>`;
};


export const errorView = (errorMessage) => {
    return `<kc-popup id="error-popup" class="content">
    <h2 slot="title">Error</h2>
    <p>
      ${errorMessage}
    </p>    
  </kc-popup>`    
    
  }
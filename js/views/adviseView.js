export const adviseView = (infoMessage) => {
    return `<article class="message is-primary">
      <div class="message-header">
        <p>Info</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        ${infoMessage}
      </div>
    </article>`
  }
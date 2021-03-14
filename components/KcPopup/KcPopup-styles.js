export const KcPopupStyles = `
<style>
.wrapper {
  opacity: 0;
  transition: visibility 0s, opacity 0.25s ease-in;
}

.wrapper:not(.open) {
  visibility: hidden;
}

.wrapper.open {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100vh;
  width: 100vw;
  opacity: 1;
  visibility: visible;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

/* Estilos del popup */
.overlay {
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.dialog {
  background-color: white;
  max-width: 500px;
  padding: 1rem;
  position: fixed;
}

button {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

button:focus {
  border: 2px solid green;
}
</style>
`;
 window.addEventListener("scroll", () => {
    let headerRolagem = document.querySelector('#headerInicial')
    headerRolagem.classList.toggle('rolagem', window.scrollY > 0)
 })
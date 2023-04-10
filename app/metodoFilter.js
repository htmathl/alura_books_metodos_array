const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const data = elementoBtn.dataset.filtro
    console.log(data);
    const livrosFiltrados = livros.filter(livro => livro.categoria === data)
    console.table(livrosFiltrados)
}

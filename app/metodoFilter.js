const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const data = elementoBtn.dataset.filtro
    const livrosFiltrados = data === 'disponivel' ? filtrarDisponivel() : filtrarCategoria(data)
    exibirLivros(livrosFiltrados)
    if(data === 'disponivel') {
        const valorTotal = calcularLivrosTotais(livrosFiltrados)
        exbibirValoTotal(valorTotal)
    }
}

function filtrarCategoria(data) {
    return livros.filter(livro => livro.categoria === data);
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exbibirValoTotal(valorTotal) {
    elementoValorTotalDeLivros.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}

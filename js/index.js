function funcaoCadastrar() {
    const formulario = document.querySelector('.form');

    const arrayDados = [];

    const cadastrando = (event) => {
        event.preventDefault();

        const nome = formulario.querySelector('.form-main-1');
        const preco = formulario.querySelector('.form-main-2');
        const quantidade = formulario.querySelector('.form-main-3');
        const quantidadeEstoque = formulario.querySelector(".form-main-4");

        const objetoCadastro = {
            nome: nome.value,
            preco: preco.value,
            quantidade: quantidade.value,
            quantidadeEstoque: quantidadeEstoque.value
        };

        arrayDados.push(objetoCadastro);
        const alerta = alert(`Produto Cadastrado! Seu produto foi ${objetoCadastro.nome}`);
        console.log(alerta);
    };

    formulario.addEventListener('submit',  cadastrando);
};

funcaoCadastrar();
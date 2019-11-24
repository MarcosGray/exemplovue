new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Exibindo Alerta.');
        },
        armazeneValor(){
            this.valor = event.target.value
        }
    },
})
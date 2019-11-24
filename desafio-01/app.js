new Vue({
    el: '#desafio',
    data: {
        nome: 'Marcos Gray',
        idade: '47',
        image: 'https://abrilviagemeturismo.files.wordpress.com/2017/01/2015_10_21_1752_00151411_5f0e4c6e8e.jpeg?quality=70&strip=info&w=924'
    },
    methods: { 
        multiplicacao: function(){        
            console.log(this.idade * 3)
            return this.idade * 3    
        },
        randomico: function(){
            return Math.random()
        }
    }
})


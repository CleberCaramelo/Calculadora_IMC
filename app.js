new Vue({
  el: "#app",
  data: {
    peso: null,
    altura: null,
    imc: null,
  },
  computed: {
    classificacao() {
      if (this.imc < 18.5) {
        return "Abaixo do peso";
      } else if (this.imc >= 18.5 && this.imc < 24.9) {
        return "Peso normal";
      } else if (this.imc >= 25 && this.imc < 29.9) {
        return "Sobrepeso";
      } else {
        return "Obesidade";
      }
    },
  },
  methods: {
    calcularIMC() {
      if (this.peso && this.altura) {
        this.imc = this.peso / (this.altura * this.altura);
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
  },
});

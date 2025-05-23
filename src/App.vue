<template>
  <div v-bind="objectOfAttrs">
    <button @click="newColorBackground">Cambiar el color de fondo</button><br><br>
    <h3 :style="{backgroundColor: color}">Usando interpolación: {{ message }}</h3>
    <button v-bind="objectOfAttrs">Mostrar button si la directiva es True</button>
    <p>{{ number + 1 }}</p>
    <p>{{ ok ? "si" : "no" }}</p>
    <p>{{ messageReverse.split('').reverse().join('') }}</p>
    <p v-if="canYouSee">¿Me puedes ver?</p>
    <p v-else="canYouSee">No te puedo ver</p>
    <p :disabled>Atributo con el mismo nombre que el valor de Javascript</p>
    <a :href="url">Google</a>
    <li><a :[attributeName]="url">Atributo Dinamico</a></li>
    <h3 :id="dinamycId">Anular Atributo</h3>
    <h3 :id="`${list}-${dinamycId}`">Atributos con expresiones de Javascript</h3>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  const message = ref("Hola mundo")
  const color = ref("teal")
  const objectOfAttrs = ref({
    id:'container',
    class: 'button',
    style: {backgroundColor : "white"}
  })

  const number = 10
  const ok = "si"
  const messageReverse = "Mensaje en reversa"
  const canYouSee = ref(true)
  const disabled = ref(false)
  const url = "https://www.google.com/"
  const attributeName = (canYouSee.value) ? "" : "href"

  const dinamycId = "dinamycId"
  const id = "app"
  const hidden = false

  const list = "list"


  function newColorBackground(){
    const color = prompt("Nuevo color de fondo")
    objectOfAttrs.value.style.backgroundColor = color
  }

</script>

<style scoped>
  body{
    color: white;
    background-color: black;
  }

  #container{
    padding: 10px 10px;
    border-radius: 10px;
    border: none;
    background-color: white
  }

  .button{
    /* color: crimson; */
    cursor: pointer;
  }
</style>

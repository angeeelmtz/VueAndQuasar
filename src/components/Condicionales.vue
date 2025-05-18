<template>
    <h3 v-if="age >= 18">Tienes edad para ir por putas</h3>
    <h3 v-else>No tienes edad para ir por putas</h3>
    <a v-bind:="objectOfAttrs">Enlace</a>
    <button @click="changeAttrs">Cambiar Atributos</button>
    <h3 v-show="age >= 18">Valor es verdadero</h3>
    <h3 v-show="age < 18">Valor es falso</h3>
</template>

<script setup>
    import {ref, reactive} from 'vue';
    let age = ref(18)

    const objectOfAttrs = reactive({
        class: "link",
        href: "https://google.com",
        style: {
            color: "orange",
            backgroundColor: "Black",
            display: "flex"
        }
    })

    function changeAttrs(){
        const newStyle = {
            color : "black",
            backgroundColor: "orange",
            display: "block"
        }
        objectOfAttrs.style = newStyle
    }



</script>

<style>
    .link{
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        font-size: 20px;
        margin: 20px 0;
    }

</style>

<template>
  <p>{{ count }}</p>
  <button @click="count++">
    {{ count }}
  </button>
  <button @click="increment">
    {{ count }}
  </button>
  <br><br>
  <p>Reactividad Profunda: <br> {{  obj.arr }}</p>
  <br>
  <button @click="newElement">Agregar elemento</button>
  <br>
  <p>{{ object.id + 1 }}</p>
</template>

<script setup>
  import {ref, reactive} from 'vue'
  const count = ref(9)
  console.log(count);
  console.log(count.value);

  const increment = () => count.value++

  const obj = ref({
    nested: {counter: 0},
    arr: ["foo", "bar"]
  })

  const newElement = () => obj.value.arr.push("baz")
  console.log(obj.value.nested)
  console.log(obj.value.arr)

  const raw = {name: "Angel"}
  const proxy = reactive(raw)
  console.log(raw.name)
  console.log(proxy.name)

  const object = {id: ref(1)}

</script>

<style>
  body{
    padding: 50px;
  }
</style>

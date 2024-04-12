<!---este archivo se usara solo para la lista de usuarios-->
<template>
    <div class="user-item">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <button @click="showDetails">Ver detalles</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object
    },
    methods: {
      showDetails() {
        // Emisión de evento para mostrar detalles del usuario
        this.$emit('show-user-details', this.user);
      }
    }
  };
  </script>
  
  <style scoped>
  .user-item {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: black;
    width: 70%;
    background-color: lightblue;
  }
  </style>
  
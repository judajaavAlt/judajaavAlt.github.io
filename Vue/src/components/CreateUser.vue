<template>
        <header><span>{{user}}</span></header>
    <nav><router-link to="/list_users" class="button selected">Gestion de usuarios</router-link></nav>
    <div>
      <h2>Crear Usuario</h2>
      <form @submit.prevent="crearUsuario">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="usuario.nombre" required>
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="usuario.apellido" required>
        </div>
        <div>
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="usuario.email" required>
        </div>
        <div>
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" v-model="usuario.contrasena" required>
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: "Gerente - Rojas",
        usuario: {
          nombre: '',
          apellido: '',
          email: '',
          contrasena: ''
        }
      };
    },
    methods: {
      crearUsuario() {
        // Aquí podrías enviar los datos del usuario al servidor para su creación
        console.log('Usuario creado:', this.usuario);
        // Luego podrías reiniciar el formulario o realizar alguna otra acción
        this.$router.push('/list_users');
        this.usuario = {
          nombre: '',
          apellido: '',
          email: '',
          contrasena: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
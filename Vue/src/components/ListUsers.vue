<template>
    <header><span>{{user}}</span></header>
    <nav><router-link to="/list-users" class="button selected">Gestion de usuarios</router-link></nav>
    <button @click="go" style="margin:2vh 2vh 1vh 3vh;">Crear usuario</button>
    <div class="list-users">
      <user-item v-for="user in users" :key="user.id" :user="user" @show-user-details="showUserDetails" />
    </div>
</template>


<script>
  import UserItem from './UserItem.vue';
  
  export default {
    components: {
      UserItem
    },
    data() {
      return {
        user: "Gerente - Rojas",
        users: [
          //Hay que conectar con la base de datos la informacion de los usuarios, esos son de ejemplos 
          { id: 1, name: 'Juan Perez', email: 'juan.perez@example.com' },
          { id: 2, name: 'Ana Martinez', email: 'ana.martinez@example.com' },
          { id: 3, name: 'Pedro García', email: 'pedro.garcia@example.com' },
          { id: 4, name: 'Pepe Rojas', email: 'pedro.rojas@example.com' }
        ]
      };
    },
    methods: {
      showUserDetails(user) {
        // Redirección a la página de detalles del usuario segun el id de cada
        this.$router.push({ path: `/user` });
      },
      go(){
        this.$router.push({ path: `/create_user` });
      },
    }
  };
</script>
  
<style scoped>
  .list-users {
    display:list-item;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    margin: 15px;
  }
</style>
  
<template>
    <header><span>{{user}}</span></header>
    <nav><router-link to="/list_users" class="button selected">Gestion de usuarios</router-link></nav>
</template>
  
<script>
export default {
data() {
  return {
    user: "Gerente - Rojas"
  };
},
methods: {
},
};
</script>
  
<style scoped>
</style>
<template>
  <header><span>{{user}}</span></header>
  <nav><router-link to="/list_users" class="button selected">Gestion de usuarios</router-link></nav>
  <div class="user-info">

      <h1 class="h1iu">Informacion de Usuario</h1>
      <p class="name">Nombre: {{ user_data.name }}</p>
      <p class="last-name">Apellido: {{ user_data.lastName }}</p>
      <p class="role">Rol: {{ user_data.role }}</p>
      <p class="identity-number">Identidad: {{ user_data.identityNumber }}</p>
      <p class="age">Edad: {{ user_data.age }}</p>
      <p class="adress">Dirección: {{ user_data.address }}</p>
      <p class="description">Descripción: {{ user_data.description }}</p>
  </div>
  <div class="button-container">
      <button class="buttona save-exit-button" @click="saveAndExit">Guardar y Salir</button>
  </div>

</template>

<script>
export default {
data() {
  return {
    user: "Gerente - Rojas",
    user_data: {
      name: 'John',
      lastName: 'Doe',
      role: 'Por definir',
      identityNumber: '1234567890',
      age: 30,
      address: '123 Main St, Anytown USA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem sem, eget viverra ipsum ornare et. Maecenas aliquet risus in ipsum eleifend rutrum. Donec euismod posuere cursus. Nullam porta maximus nisi pharetra varius. Nunc convallis imperdiet lorem sit amet feugiat. Quisque pretium erat non ultricies lacinia. ',
    },
  };
},
methods: {
  saveAndExit(){
      //Guardar la informacion del usuario aqui
      this.$router.push('/list_users');
  },
},
};
</script>

<style scoped>


.userinfo {
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin: 30px;
  padding: 20px;
}

.h1iu{
  font-size: 50px;
  margin: 15px;
  padding: 10px;
  background-color: lightblue;
  width: 40%;
  font-weight: bold;
  border-radius: 10px;
}

.name,
.last-name,
.role,
.identity-number,
.age,
.adress {
margin:  15px;
font-size: 18px;
font-weight: medium;
background-color: lightgray;
border-radius: 5px;
padding: 10px;
width: max-content;
}
.description{
  margin: 15px;
  text-align: justify;
  max-width: 50%;
  line-height: 1.5em;
  font-size: 18px;
  background-color: lightblue;
  border-radius: 10px;
  padding: 10px;
}

.button-container {
position: fixed;
bottom: 20px;
right: 20px;
}

.buttona {
display: inline-block;
padding: 10px 20px;
margin-bottom: 10px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
text-decoration: none;
transition: background-color 0.3s ease;
}

.buttona:hover {
background-color: #0056b3;
}

.save-exit-button {
background-color: #28a745;
}

.save-exit-button:hover {
background-color: #1e7e34;
}

</style>
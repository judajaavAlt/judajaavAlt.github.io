<template>
    <header>
        <h1>BIENVENIDO AL PORTAL DE CONSTRUEMPRESA</h1>
    </header>
    <main>
        <h2>Inicia sesión</h2>
        <form @submit.stop.prevent="submit()"> 
            <label for="Iuser">Correo ó Usuario</label><br>
            <input type="text" id="Iuser" name="Iuser"><br><br>
            <label for="lname">Contraseña</label><br>
            <input type="password" id="Ipassword" name="Ipassword"><br><br>
            <!-- Real: 6Lfa8LcpAAAAAM9wonw9STEHKGrSJ9CHm6yPnH4b-->
           
            <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-action="LOGIN" name="captcha"></div>
            <br><br>
            <input type="submit" @click.stop.prevent="submit()" value="Ingresar">
        </form>
    </main>
</template>


<script>
export default {
    methods: {
        submit() {
            this.$router.push('/list_users');
        }
    }
}
</script>
  
<style scoped>
    
    body
    {
        background-color: #D0D3D4; 
    }
    .g-recaptcha 
    {
        scale: 0.85;
    }

    *{margin:0px;}

    header
    {
        width: 54vw;
        height: 29vh;
        position: relative;
        top: 23vh;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 2vw;
        box-sizing: border-box;
        padding: 2vw;
    }

    main
    {
        width: 30vw;
        height: fit-content;
        padding: 4vw 1vw;
        background-color: white;
        position: absolute;
        top: 15vh;
        right: 8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
    }

    form
    {
        width: 87%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2vh;
    }

    label
    {
        align-self:flex-start;
    }

    input[type=text], input[type=password]
    {
        
        width:100%;
        height: 3vh;
    }

    input[type=submit]
    {
        width: fit-content;
        padding: 0px 20px;
        height: 4vh;
        border: 2px solid black;
        border-radius: 1vh;
        background-color: white;
    }

    @media screen and (max-width: 768px) {
        .g-recaptcha 
        {
        scale: 0.8;
        }
        body
        {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        header
        {
            position: static;
            width: 100vw;
            height: 40vh;
            font-size: 5vw;
        }

        main
        {
            position: static;
            margin: 5vw;
            width: 90vw;
        }
        
    }
</style>
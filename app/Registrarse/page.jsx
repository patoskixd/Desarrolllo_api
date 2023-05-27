export default function Register() {
    return(
        <div id="container">
            <form>
                <h1>Ingrese los datos solicitados para registrarse</h1>
                <br/>
                <label htmlFor="name"></label>
                <input type="text" id="nombres" name="nombres" placeholder="Ingrese sus nombres"/>

                <label htmlFor="name"></label>
                <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos"/>

                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Ingrese su correo"/>

                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Ingrese su contraseña"/>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}
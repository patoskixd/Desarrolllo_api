export default function Login(){
    return(
        <nav>
            <form>
                <h1>Ingrese los datos solicitados para Ingresar</h1>
                <label htmlFor="email"></label>
                <input type="email" id="emailI" name="emailI" placeholder="Ingrese su correo electronico"/>

                <label htmlFor="password"></label>
                <input type="password" id="passwordI" name="passwordI" placeholder="Ingrese Contraseña"/>

                <button type="submit">Ingresar</button>
    </form>
        </nav>
    );
}
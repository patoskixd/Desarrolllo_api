export default function CrearInventario(){
    return(
        <nav>
            <form> 
                <h1>Ingrese los datos solictados para crear un nuevo inventario</h1>
                <label htmlFor="name"></label>
                <input type="text" id="nombreInventario" name="nombreInventario" placeholder="Ingrese el nombre del inventario"/>

                <select name="TipoInventario" id="TipoInventario">
                    <option value="general">Inventario General</option>
                    <option value="personalizado">Inventario Personalizado</option>
                </select>

                <button type="submit">Crear Inventario</button>
            </form>
        </nav>
    );
}
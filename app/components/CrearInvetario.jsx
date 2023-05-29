"use client";
import React from "react"
import styles from './CrearInventario.module.css'

export function CrearInventario() {
    return(
        <div className={styles.container}>
            <form> 
                <h1>Ingrese los datos solictados para crear un nuevo inventario</h1>
                <label htmlFor="name"></label>
                <input type="text" id="nombreInventario" name="nombreInventario" placeholder="Ingrese el nombre del inventario"/>
                <label  class="custom-select">
                    <select name="TipoInventario" id="TipoInventario">
                        <option value="general">Inventario General</option>
                        <option value="personalizado">Inventario Personalizado</option>
                    </select>
                </label>
                <br/>
                <button type="submit" onClick={()=> router.push('/Inventarios/1')}>Crear Inventario</button>
            </form>
        </div>
    );

}
export default CrearInventario;

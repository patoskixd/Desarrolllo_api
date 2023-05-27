"use client";
import React from "react";
export default function CrearInventario() {
    return(
        <div id="container">
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
                <button type="submit">Crear Inventario</button>
            </form>
        </div>          
    );
}
"use client";
import React from "react";
export default function Login() {
    return(
        <div>
            <div id="container">
            <form>
                <h2>Ingrese los datos solicitados para Ingresar</h2>
                <br/>
                    <label htmlFor="email"></label>
                    <input type="email" id="emailI" name="emailI" placeholder="Ingrese su correo electronico" required/>

                <label htmlFor="password"></label>
                <input type="password" id="passwordI" name="passwordI" placeholder="Ingrese Contraseña" required/>
                <button type="submit">Ingresar</button>
            </form>
            </div>
        </div>
    );
}
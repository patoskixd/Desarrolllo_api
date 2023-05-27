"use client";
import React from "react";

export default function tablas() {
    return(
        <div id="table-container">
          <h1 id="heading"> Tablas</h1>
            <table id="table">
              <thead>
                <tr>
                  <th>ID inventarios</th>
                  <th>Nombre Inventarios</th>
                  <th>Tipo Inventarios</th>
                  <th>Ver/Editar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Row 2, Column 1</td>
                  <td>Row 2, Column 2</td>
                  <td>Row 2, Column 3</td>
                  <td><button id="boton1">Ver</button><button id="boton2">Editar</button></td>
                </tr>
                <tr>
                  <td>Row 3, Column 1</td>
                  <td>Row 3, Column 2</td>
                  <td>Row 3, Column 3</td>
                  <td><button id="boton1">Ver</button><button id="boton2">Editar</button></td>
                </tr>
              </tbody>
              
            </table>
        </div>
    );
}
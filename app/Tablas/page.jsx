export default function tablas(){
    return(
        <nav>
            <table id="Tablaslistadas">
              <tr>
                <td>ID inventarios</td>
                <td>Nombre Inventarios</td>
                <td>Tipo Inventarios</td>
                <td>Ver/Editar</td>
              </tr>
              <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
                <td><button>Ver</button><button>Editar</button></td>
              </tr>
              <tr>
                <td>Row 3, Column 1</td>
                <td>Row 3, Column 2</td>
                <td>Row 3, Column 3</td>
                <td><button>Ver</button><button>Editar</button></td>
              </tr>
            </table>
        </nav>
    );
}
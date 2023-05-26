import Link from 'next/link'
import styles from './NavBar.module.css'

const links = [{
  label:'Inicio',
  route:'/'
}, {
  label: 'Ingresar',
  route:'/Login',
}, {
  label: 'Registrarse',
  route: '/Registrarse',
}, {
  label:'Crear Inventario',
  route:'/CrearInventario',
}, {
  label: 'Tablas',
  route: '/Tablas',
}, {
  label: 'Usuarios',
  route: '/Users'
}]


export function NavBar() {
    return(
        <header className ={styles.header}>
          <nav>
            
            <ul className = {styles.navbar}>
              <h1 className = {styles.titulo}>InventApp</h1>
              {links.map(({label , route}) =>(
                
                <li key = {route}>
                  <Link href ={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          </header>
    );
}


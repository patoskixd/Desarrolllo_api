import Link from 'next/link'
import styles from './NavBar.module.css'

const links = [{
    label:'Tablas',
    route:'/Tablas'
  }, {
    label: 'Crear Inventario',
    route:'/CrearInventario',
  }, {
    label: 'Usuarios',
    route: '/Users',
  },{
    label: 'Cerrar Sesión',
    route: '/',
  }]

  
export function NavBar2() {
    return(
        <header  className ={styles.header}>
        
          <h1 className = {styles.titulo}>InventApp</h1>
          <nav className={styles.nav}>
            <ul  className = {styles.navbar}>              

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


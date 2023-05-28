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
}]


export function NavBar() {
    return(
        <header  className ={styles.header}>
            <h1 >InventApp</h1>
        
          
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


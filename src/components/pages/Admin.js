import styles from './Admin.module.css'
import gee_img from '../../img/gee_img.png'

import LinkButton from '../layout/LinkButton'

function Admin(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo a pagina do <span>Administrador</span></h1>
            <p>Gerencie pessoas, agendamentos e muito mais.</p>
            <LinkButton to="/profissionais" text="Pagina dos Profissionais de Saúde"/>
            <img src={gee_img} alt="Admin" />
        </section>
    )

}


export default Admin
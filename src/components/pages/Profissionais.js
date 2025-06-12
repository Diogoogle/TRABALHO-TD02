import styles from './Profissionais.module.css'
import ProfissionaisForm from '../project/ProfissionaisForm'

function Profissionais(){
    return (
        <div className={styles.profissionais_container}>
            <div>
                <h1>Profissionais de Saúde</h1>
                <ProfissionaisForm btnText="Criar Projeto" />
            </div>
            <textarea
            placeholder={`{\n   'name': 'Diogo Zaccaron'\n    'specialty': 'Pediatra'\n   'contact': 'diogozacca@unesc.net'\n    'phone_number': '48 3244-3212'\n    'status': 'on'\n}`}
            rows="5"
            cols="100"
            />
        </div>

    )

}


export default Profissionais
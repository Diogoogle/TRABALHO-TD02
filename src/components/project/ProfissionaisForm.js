
import {useState, useEffect} from 'react'

import styles_form from './ProfissionaisForm.module.css'
import Input from  '../form/Input'
// import SubmitButton from '../form/SubmitButton'
import styles_prof from '../pages/Profissionais.module.css'

function ProfissionaisForm({ btnText }){

    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [idPesquisaGet, setIdPesquisaGet] = useState('')
    const [idPesquisaDel, setIdPesquisaDel] = useState('')
    const [nomePesquisaGet, setNomePesquisaGet] = useState('')
    const [idProfissonalPost, setIdPesquisaPost] = useState('')
    const [novoProfissional, setNovoProfissional] = useState('')


    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err))
    }, [])


    function handleSubmitIdGet(e){
        e.preventDefault();

        alert("Id pesquisado = " + idPesquisaGet)
    }

    function handleSubmitNameGet(e){
        e.preventDefault();

        alert("Nome pesquisado = " + nomePesquisaGet)
    }

    function handleSubmitInsert(e){
        e.preventDefault();

        alert("Conteúdo do textarea: \n" + novoProfissional)
    }

    function handleSubmitDelete(e){
        e.preventDefault();

        alert("Deletando profissional de id = " + idPesquisaDel)
    }

    function handleSubmitPost(e){
        e.preventDefault();

        alert("Atualizando profissional de id = " + idProfissonalPost)
    }

    return (
        <div className={styles_prof.profissionais_container}>
            <div style={{width: 800}}>
                <h1>Profissionais de Saúde</h1>
            
                <form className={styles_form.form} id="formularioProfissionaisIdGet" onSubmit={handleSubmitIdGet}>
                    <Input value={idPesquisaGet} handleOnChange={(e) => setIdPesquisaGet(e.target.value)} type="text" text_btn="PESQUISAR POR ID" name="Name" placeholder="Insira o ID do profissional a ser pesquisado" />
                </form>
                <form className={styles_form.form} id="formularioProfissionaisNameGet" onSubmit={handleSubmitNameGet}>
                    <Input value={nomePesquisaGet} handleOnChange={(e) => setNomePesquisaGet(e.target.value)}type="text" text_btn="PESQUISAR POR NOME" name="Name" placeholder="Insira o NOME do profissional a ser pesquisado"/>
                </form>
                <form className={styles_form.form} id="formularioProfissionaisInserir" onSubmit={handleSubmitInsert}>
                    <Input type="sem_tipo" text_btn="INSERIR" name="Name"/>
                </form>
                <form className={styles_form.form} id="formularioProfissionaisDeletar" onSubmit={handleSubmitDelete}>
                    <Input value={idPesquisaDel} handleOnChange={(e) => setIdPesquisaDel(e.target.value)} type="text" text_btn="DELETAR POR ID" name="Name" placeholder="Insira o ID do profissional deletado"/>
                </form>
                <form className={styles_form.form} id="formularioProfissionaisAtualizar" onSubmit={handleSubmitPost}>
                    <Input value={idProfissonalPost} handleOnChange={(e) => setIdPesquisaPost(e.target.value)}  type="text" text_btn="ATUALIZAR POR ID" name="Name" placeholder="Insira o ID do profissional a ser atualizado"/>
                </form>
            </div>
            <textarea
                placeholder={`{\n   'name': 'Diogo Zaccaron'\n    'specialty': 'Pediatra'\n   'contact': 'diogozacca@unesc.net'\n    'phone_number': '48 3244-3212'\n    'status': 'on'\n}`}
                rows="5"
                cols="100"
                value={novoProfissional}
                onChange={e => setNovoProfissional(e.target.value)}
            />
        </div>
        
    )
}

export default ProfissionaisForm
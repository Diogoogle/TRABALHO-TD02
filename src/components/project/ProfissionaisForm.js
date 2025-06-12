import {useState, useEffect} from 'react'

import styles from './ProfissionaisForm.module.css'
import Input from  '../form/Input'



function ProfissionaisForm({ btnText }){

    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState('')

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

    function handleCategoryChange(e){
        setCategoryId(e.target.value)
    }

    return (
        <form className={styles.form}>
            <Input type="text" text_btn="PESQUISAR POR ID" name="Name" placeholder="Insira o ID do profissional a ser pesquisado"/>
            <Input type="text" text_btn="PESQUISAR POR NOME" name="Name" placeholder="Insira o NOME do profissional a ser pesquisado"/>
            <Input type="sem_tipo" text_btn="INSERIR" name="Name"/>
            <Input type="text" text_btn="DELETAR POR ID" name="Name" placeholder="Insira o ID do profissional deletado"/>
            <Input type="text" text_btn="ATUALIZAR POR ID" name="Name" placeholder="Insira o ID do profissional a ser atualizado"/>
        </form>
    )
}


export default ProfissionaisForm
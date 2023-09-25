import { useParams } from "react-router-dom"

function EditarProdutos(){
    // recuperando o paramento ID com HOOK useParams()
    const {id} = useParams()
    document.title = "EDITAR PRODUTOS" + id 
    
    return(
        <div>Editar Produtos</div>
    )
}

export default EditarProdutos
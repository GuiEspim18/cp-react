import { useParams } from "react-router-dom"

function ExcluirProdutos() {
    // recuperando o paramento ID com HOOK useParams()
    const {id} = useParams()
    document.title = "EXCLUIR PRODUTOS" + id 
    
    return(
        <div>Excluir Produtos</div>
    )
}

export default ExcluirProdutos;
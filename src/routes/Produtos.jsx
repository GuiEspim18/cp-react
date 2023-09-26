import { useEffect, useState } from "react"
import { ListaProdutosExterna } from "../components/ListaProdutosExterna";
import { Link } from "react-router-dom";
function Produtos(){
    
    document.title = "Lista de Produtos"
    //Declarando o useState como uma lista de objetos [{}]
    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

    //Estrutura que recebe a lista de produtos externa e repassa para uma lista local
    useEffect(()=>{
       setListaProdutosLocal(ListaProdutosExterna)
    }, [])

    return(
        <div>
            <h1>Lista de Produtos</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>EDITAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaProdutosLocal.map((item, indice)=>(
                                <tr key={indice}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td>R${item.preco}</td>
                                    <td><Link to={`/editar/produtos/${item.id}`}>Editar</Link></td>
                                    <td><Link to={`/excluir/produtos/${item.id}`}>Excluir</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>PRODUTOS INFORMÁTICOS - QTD: {ListaProdutosExterna.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Produtos
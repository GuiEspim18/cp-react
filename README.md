# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#Iniciando a criação de ROTAS com react-router-DOM

#Instalando a dependencia no projeto
-npm install react-router-dom

#Criar a pasta routes
-Criar pasta routes

#Criar as rotas ou páginas
-Criando as rotas/páginas [home, EditarProdutos, Produtos, error 404]

#Importar os objetos das rotas no main.jsx
- import {createBrowserRouter, RouterProvider} from 'react-router-dom'
- import {createBrowserRouter, RouterProvider} from 'react-router-dom'
- import Produtos from './components/Produtos.jsx'
- import EditarProdutos from './components/EditarProdutos.jsx'
- import Home from './components/Home.jsx'
- import Erro404 from './components/Erro404.jsx'

#Criando o objeto de rotas com o CreateBrowserRouter
- const Routes = createBrowserRouter([
  {path:'/', element:<App/>, 
    children:[
      {path:'/', element:<Home/>},
      {path:'/produtos', element:<Produtos/>},
      {path:'/editar/produtos/:id', element:<EditarProdutos/>}

  ]}
])

#trocar o componente <App/> pelo componente <RouterProvider/> no ReactDOM.render
- ReactDOM.render(
    <React.StrictMode>
        <RouterProvider/>
    </React.StrictMode>
)

#Adicionando o props router ao componente RouterProvider
-ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)


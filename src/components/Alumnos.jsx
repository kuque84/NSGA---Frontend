import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'


const Alumnos = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [numpage, setNumpage] = useState(1);
    const [cantItems, setCantItems] = useState(0);

    return (
        <div className="justify-start bg-cyan-100 bg-opacity-60 py-16 px-16 rounded-md">
        <h2
        className="w-full text-center text-2xl font-bold text-primary mb-4 mt-4"
        >Lista de productos
        </h2>
        <input
            id="searchQuery"
            className="border-2 border-primary rounded-md mb-5"
            type="text"
            placeholder="Buscar producto"
            value={searchQuery}
            onKeyDown={(e) => {
            if (e.key === "Enter") {loadProducts(true)}
            }}
            onChange={(e) => {
            setSearchQuery(e.target.value);
            }}
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {filteredProducts.map((product) => (
                <Link  key={product.id} to={`info/${product.id}`}>
            <li className=" bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer  p-3 m-2 rounded-md">
                {product.nombre}
                {/*console.log(product.imagen)*/}
                <img src={settings.urlImg + product.imagen} alt={product.descripcion} className="h-64 object-cover"/>
            </li></Link>
            ))}
        </ul>
        <div className="flex justify-center">
            <button
            hidden={numpage === 1}
            disabled={numpage === 1}
            className={numpage === 1 ? "bg-gray-600":"bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
            
            onClick={() => prevPage()}
            >
            Anterior
            </button>
            <button
            hidden={numpage === Math.ceil(cantItems/4)}
            disabled={numpage === Math.ceil(cantItems/4)}
            className={numpage === Math.ceil(cantItems/4) ? "bg-gray-600":"bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
            onClick={() => nextPage()}
            >
            Siguiente
            </button>
        </div>
        </div>
    );
}

export default Alumnos
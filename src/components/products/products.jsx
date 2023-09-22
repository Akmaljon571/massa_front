import { useEffect, useState } from "react";
import { api } from "../../content/start";
import img from '../../img/rasm6.png'
import hear from '../../img/like.svg'
import './products.scss'
import { useNavigate } from "react-router-dom";

function Products({ children }) {
    const [product, setProduct] = useState([]);
    const page = children.split(',')[0]
    const nechta = children.split(',')[1]
    const category = children.split(', ')[2] || ''
    const navigate = useNavigate()

    // const clickLike = () => {

    // }

    useEffect(() => {
        if (category) {
            const a = `product/${category}?son=${nechta}&page=${page}`
            fetch(api + a)
            .then(re => re.json())
            .then(data => setProduct(data))
        } else  {
            fetch(api + `product?son=${nechta}&page=${page}`)
            .then(re => re.json())
            .then(data => setProduct(data))
        }
    }, [setProduct, category, nechta, page]);

    return ( 
        <section className="products">
            <ul className="products-list">
                {product.length ? 
                product.map((e, i) => (
                    <li onClick={() => navigate('/product/' + e._id)} key={i} className="products-card">
                        {e._id.split('').reverse().find(w => Number(w)) % 4 === 0 ? 
                            <span className="new">New</span> 
                        : null}
                        {e.chegirma && e._id.split('').reverse().find(w => Number(w)) % 4 !== 0 ?
                            <span className="chegirma">{e.chegirma}</span>
                         : null}
                        <div className="top">
                            <div className="hear">
                                {/* <img src="" alt="" /> tokenlar tekshiruvidan keyin userlarni ozgarishlarni hammasini togirlab keyin like bosishni qilaman */}
                                <img className="hear-img" src={hear} alt="Head icon" />
                            </div>
                            <img className="main-img" width={265} height={265} src={img} alt="Icon" />
                        </div>
                        <div className="bottom">
                            <h3>{e.title}</h3>
                            <p className={e.chegirma ? 'del' : ""}>{e.price} uzs {e.chegirma && <del>{e.oldPrice} uzs</del>}</p>
                        </div>
                    </li>
                )) : null}
            </ul>
        </section>
    );
}

export default Products;
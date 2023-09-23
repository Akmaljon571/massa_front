import { useEffect, useState } from 'react';
import vector from '../../img/Vector 255 OQ.svg'
import { api } from '../../content/start';
import Err from '../../html/err';
import './order.scss'

function HeroOrder() {
    const [ openOrder, setOpenOrder ] = useState(true)
    const [order, setOrder] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        if (token) {
            fetch(api + 'user/order')
            .then(re => re.json())
            .then(data => setOrder(data))
        }
    }, [setOrder, token]);

    return (  
        <section className="order">
            <ul className={openOrder ? "top" : 'none'}>
                {order?.length ?
                    order.map((e, i) => (
                        <li key={i}>
                            {e.title}
                        </li>
                    ))
                : <Err />}
            </ul>
            <div className={openOrder ? "bottom" : "bottom bottom-close"}>
                <p>Order</p>
                <button onClick={() => setOpenOrder(!openOrder)}><img src={vector} alt="Arrov" /></button>
            </div>
        </section>
    );
}

export default HeroOrder;
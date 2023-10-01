import { useEffect, useState } from "react";
import { api } from "../../content/start";
import { useNavigate } from "react-router-dom";
import img from '../../img/rasm6.png'
import hear from '../../img/like.svg'
import activeLike from '../../img/active-like.svg'
import useStart from "../../hooks/useStart";
import './products.scss'
import { message } from 'antd';

function Products({ children }) {
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState({});
    const [active, setActive] = useState([]);
    const { token, counts, setCounts } = useStart()
    const page = children.split(',')[0]
    const nechta = children.split(',')[1]
    const category = children.split(', ')[2] || ''
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();

    const clickLike = (e, find) => {
        const _class = e.target.className.split(' ')[0]
        messageApi.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });

        if (_class === 'likeActive') {
            const findLike = find.like?.find(el => user?.like?.find(w => w === el))
            if (!active.find(el => el === find._id)) {
                setActive([...active, find._id])
                fetch(api + 'user/like', {
                    method: 'POST',
                    headers: {
                        "autharization": token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        pro_id: find._id
                    })
                })
                .then(re => {
                    if (re.ok) {
                        setCounts(counts + 1)
                        messageApi.destroy()
                        messageApi.open({
                            type: 'success',
                            content: 'This is a success message',
                        })
                    }
                })
            } else {
                setActive(active.filter(el => el !== find._id))
                fetch(api + `user/like/${findLike}`, {
                    method: 'DELETE',
                    headers: {
                        "autharization": token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(re => {
                    if (re.ok) {
                        setCounts(counts + 1)
                        messageApi.destroy()
                        messageApi.open({
                            type: 'success',
                            content: 'This is a success message',
                        })
                    }
                })
            }    
        } else {
            navigate('/product/' + find._id)
        }
    }

    useEffect(() => {
        if (!active?.length) {
            const a = product.filter(e => e.like?.find(el => user.like?.find(w => w === el)) ? e._id : null) 
            setActive(a.map(e => e._id)) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product, user]);

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

        if (token) {
            fetch(api + 'user/one', {
                headers: {
                    "autharization": token
                }
            })
            .then(re => re.json())
            .then(data => setUser(data))
        }
    }, [category, nechta, page, token, counts]);

    return ( 
        <section className="products">
            {contextHolder}
            <ul className="products-list">
                {product.length ? 
                product.map((e, i) => (
                    <li onClick={(t) => clickLike(t, e)} key={i} className="products-card">
                        {e._id.split('').reverse().find(w => Number(w)) % 4 === 0 ? 
                            <span className="new">New</span> 
                        : null}
                        {e.chegirma && e._id.split('').reverse().find(w => Number(w)) % 4 !== 0 ?
                            <span className="chegirma">{e.chegirma}</span>
                         : null}
                        <div className="top">
                            <div className="likeActive hear">
                                {active.find(el => el === e._id) ?
                                    <img className={!active.find(el => el === e._id) ? "likeActive none" : "likeActive"} width={22} height={22} src={activeLike} alt="Active Like" />
                                : 
                                    <img width={22} height={22} className={!active.find(el => el === e._id) ? "likeActive none" : "likeActive"} src={hear} alt="Head icon" />}
                                {active.find(el => el === e._id) ?
                                null : <img width={22} height={22} className={active.find(el => el === e._id) ? "likeActive none" : "likeActive"} src={hear} alt="Head icon" />}
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
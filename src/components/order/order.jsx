import vector from '../../img/Vector 255 OQ.svg'
import img from '../../img/error-6482984_960_720.webp'
import useStart from '../../hooks/useStart';
import nuqta from '../../img/nuqta.svg'
import del from '../../img/del.png'
import { useEffect, useState } from 'react';
import { api } from '../../content/start';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import './order.scss'

function HeroOrder() {
    const [ openOrder, setOpenOrder ] = useState(true)
    const [order, setOrder] = useState({});
    const { token } = useStart()
    const navigate = useNavigate()
    const [count, setCount] = useState(0);
    const [_delete, setDelete] = useState('');
    const [messageApi, contextHolder] = message.useMessage();

    const clear = () => {
        messageApi.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });
        fetch(api + `user/order`, {
            method: 'DELETE',
            headers: {
                "autharization": token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(re => {
            if (re.ok) {
                setCount(count + 1)
                messageApi.destroy()
                messageApi.open({
                    type: 'success',
                    content: 'This is a success message',
                })
            }
        })
    }

    const minus = (id) => {
        messageApi.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });
        fetch(api + `user/order/minus/${id}`, {
            method: 'DELETE',
            headers: {
                "autharization": token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(re => {
            if (re.ok) {
                setCount(count + 1)
                messageApi.destroy()
                messageApi.open({
                    type: 'success',
                    content: 'This is a success message',
                })
            }
        })
    }

    const plus = (id, pro) => {
        if (id && pro) {
            messageApi.open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 0,
              });
            fetch(api + 'user/order', {
                method: 'POST',
                headers: {
                    "autharization": token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pro_id: pro,
                    product: id,
                })
            })
            .then(re => {
                if (re.ok) {
                    setCount(count + 1)
                    messageApi.destroy()
                    messageApi.open({
                        type: 'success',
                        content: 'This is a success message',
                    })
                }
            })
        }
    }

    useEffect(() => {
        if (token) {
            fetch(api + 'user/order', {
                headers: {
                    "autharization": token,
                }
            })
            .then(re => re.json())
            .then(data => setOrder(data))
        }
    }, [setOrder, token, count]);

    const noDel = (e) => {
        if (e.target?.className?.split(' ')[0] === 'dele') {
            messageApi.open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 0,
              });
            fetch(api + `user/order/remove/${e.target?.id}`, {
                method: "DELETE",
                headers: {
                    "autharization": token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(re => {
                if (re.ok) {
                    setCount(count + 1)
                    messageApi.destroy()
                    messageApi.open({
                        type: 'success',
                        content: 'This is a success message',
                    })
                }
            })
            setDelete('')
        } else if (e.target?.className?.split(' ')[0] !== 'abs') {
            setDelete('')
        } else {
            setDelete(e.target.id)
        } 
    }

    return (  
        <section onClick={(e) => noDel(e)} className="order">
            {contextHolder}
            <div className={openOrder ? "top" : 'none'}>
            {order?.data?.length ?
                <>
                    <ul className='left'>
                        {order?.data?.length ?
                            order?.data?.map((e, i) => (
                                <li key={i}>
                                    <div className='order-father'>
                                        <img className='order-image' width={200} height={200} src={e.pro.image} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>{e.title}</h2>
                                        <div className='color'>
                                            <div>
                                                <p className='media_none'>Size:</p> <span>{e?.pro?.razmer}</span>
                                            </div>
                                            <hr />
                                            <p className='media_none'>Color:</p> <mark style={{backgroundColor: e?.pro?.color, boxShadow: `0.5px 0.5px 5px ${e?.pro?.color}`}}></mark>
                                        </div>
                                        <div className="card-bottom">
                                            <div className={e.chegirma ? 'active' : 'narx'}>
                                                {e.chegirma ? <>
                                                    <p className='chegirma'>-{e.chegirma}</p>
                                                    <span></span>
                                                    <p>{e.price} uzs</p>
                                                </> : <>
                                                    <span></span>
                                                    <p>{e.price} uzs</p>
                                                </>}
                                            </div>
                                            <div className="add">
                                                <span onClick={() => e?.order?.length <= 1 ? '' : minus(e?.order[0])} className={e?.order?.length <= 1 ? 'minus' : 'minus-active'}><i></i></span>
                                                <p className='soni'>{e.order?.length}</p>
                                                <span onClick={() => plus(e._id, e?.pro?._id)} className='plus'>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id={e.pro?._id} className="abs absalute">
                                        <img className='abs' id={e.pro?._id} src={nuqta} alt="nuqta" />
                                        {e.pro?._id === _delete ?
                                        <div id={e.order[0]} className='dele del'>
                                            Delete
                                            <img id={e.order[0]} className='dele' src={del} alt="Delete Icon " />
                                        </div> : null}
                                    </div>
                                </li>
                            ))
                        : null}
                    </ul>
                    <div className={order?.data?.length ? "right" : "none"}>
                        <div className="narx">
                            Jami: <p className='jami'><span></span> {order?.jami} uzs</p>
                            <hr />
                            Soni: <p className='soni'>{order?.data?.length}</p>
                        </div>
                        <div className="btn">
                            <button onClick={() => navigate('/buy')}>Zood pay</button>
                            <span><hr /> or <hr /></span>
                            <button onClick={clear} className='clear'>clearance</button>
                        </div>
                    </div>
                </> :  <img width={400} className='error_image' style={{marginLeft: '450px', marginTop: "17px"}} src={img} alt="Error page" /> } 
            </div>
            <div className={openOrder ? "bottom" : "bottom bottom-close"}>
                <p>Order</p>
                <button onClick={() => setOpenOrder(!openOrder)}><img src={vector} alt="Arrov" /></button>
            </div>
        </section>
    );
}

export default HeroOrder;
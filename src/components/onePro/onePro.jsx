import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../content/start';
import arrov from '../../img/Vector 255.svg'
import useStart from '../../hooks/useStart';
import gif from '../../img/YouTube_loading_symbol_3_(transparent).gif'
import './onePro.scss'

function OnePro() {
    const location = useLocation().pathname.split('/')[2]
    const [one, setOne] = useState({});
    const [carousel, setCarousel] = useState(0);
    const [qoshimcha, setQoshimcha] = useState(1);
    const [load, setLoad] = useState(false);
    const { token } = useStart()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(api + `pro/${location}`)
        .then(re => re.json())
        .then(data => setOne(data))
    }, [location]);

    const add = () => {
        setLoad(true)
        if (token) {
            fetch(api + 'user/order', {
                method: "POST",
                headers: {
                    "autharization": token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product: one._id,
                    pro_id: one.pro[carousel]?._id
                })
            }) 
            .then(re => re.ok ? navigate('/order') : "")
        } else {
            navigate('/login')
        }
    }

    return (  
        <section className='onePro'>
            <div className="left">
                <ul className='onePro-carousel'>
                    {one?.pro?.length ?
                       one?.pro?.map((e, i) => (
                            <li className={i === carousel ? 'ca-active' : ""} key={i}></li>
                       )) 
                    : null}
                </ul>
                <div className='onePro-image'>
                    <button onClick={() => carousel === 0 ? setCarousel(one.pro.length - 1) : setCarousel(carousel - 1)} className='chap'>
                        <img src={arrov} alt="Arrov" />
                    </button>
                    {one?.pro?.length ?
                       one?.pro?.map((e, i) => (
                            <div className={i === carousel ? 'active' : i === function() {
                                return 0 > carousel - 1 ? one.pro.length - 1 : carousel - 1}() ? 'right-none' : 'left-none'} key={i}>
                                <img className='glavniy' src={e?.image} alt="carousel" />
                            </div>
                       )) 
                    : null}
                    <button onClick={() => carousel === (one?.pro?.length - 1) ? setCarousel(0) : setCarousel(carousel + 1)} className='ong'>
                        <img src={arrov} alt="Arrov" />
                    </button>
                </div>
            </div>
            <div className="right">
                <h1>{one.title}</h1>
                {one.chegirma ?
                    <div className='chegirma'>
                        <div className='red'>
                            <b>{one.chegirma}</b>
                            <span></span>
                            <p>{one.price} uzs</p>    
                        </div>  
                        <del>{one.oldPrice} uzs</del>
                    </div>
                :
                    <div className='noChegirma'>
                        <p>{one.price} uzs</p>
                    </div>
                }
                <ul className='colors'>
                    {one?.pro?.length ?
                        one?.pro?.map((e, i) => (
                            <li className={i === carousel ? 'color-active' : ""} key={i}>
                                <div onClick={() => setCarousel(i)} className='color' style={{backgroundColor: one.pro[i].color}}></div>
                                <div onClick={() => setCarousel(i)} className='razmer'>{one?.pro[i].razmer 
                                }</div>
                            </li>
                        )) 
                    : null}
                </ul>
                <div className='btns'>
                    <button className={load ? 'loading-btn' : ""} onClick={add}>{load ? <img src={gif} alt='Loading' /> : 'add to cart'}</button>
                    <button onClick={() => navigate('/buy')} className='buy'>BUY NOW</button>
                </div>
                <div className='qoshimcha'>
                    {qoshimcha === 1 ? <>
                        <div className="about">
                            <span className='qoshimcha-active'>About</span>
                            <span className='Delivery' onClick={() => setQoshimcha(2)}>Delivery</span>
                            {one.title} shu mahsulotni sotib olish uchun
                        </div>
                    </> : <>
                        <div className="about">
                            <span onClick={() => setQoshimcha(1)}>About</span>
                            <span className='qoshimcha-active Delivery'>Delivery</span>
                            Shu mahsulotni olamizmi ?
                        </div>
                    </>}
                </div>
            </div>
        </section>
    );
}

export default OnePro;
import { useEffect, useState } from 'react';
import vector from '../../img/Vector 255 OQ.svg'
import { api } from '../../content/start';
import { useNavigate } from 'react-router-dom'
import Err from '../../html/err';
import img from '../../img/rasm6.png'
import activeLike from '../../img/active-like.svg'
import './like.scss'

function HeroLike() {
    const [ openCategory, setOpenCategory ] = useState(true)
    const [like, setLike] = useState([]);
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        if (token) {
            fetch(api + 'user/like', {
                headers: {
                    "autharization": token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(re => re.json())
            .then(data => setLike(data))
        } else {
            setLike([])
        }
    }, [setLike, token]);

    const clickLike = (e, find) => {
        const _class = e.target.className.split(' ')[0]

        if (_class === 'likeActive') {
            fetch(api + `user/like/${find.like_id}`, {
                method: 'DELETE',
                headers: {
                    "autharization": token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(re => {
                window.location.reload(true)
            })
        } else {
            navigate('/product/' + find._id)
        }
    }

    return (  
        <section className="like">
            <ul className={openCategory ? "top" : 'none'}>
                {like?.length ?
                    like.map((e, i) => (
                        <li onClick={(t) => clickLike(t, e)} key={i} className="like-card">
                        {e._id.split('').reverse().find(w => Number(w)) % 4 === 0 ? 
                            <span className="new">New</span> 
                        : null}
                        {e.chegirma && e._id.split('').reverse().find(w => Number(w)) % 4 !== 0 ?
                            <span className="chegirma">{e.chegirma}</span>
                         : null}
                        <div className="like-top">
                            <div className="likeActive hear">
                                <img className="likeActive" width={22} height={22} src={activeLike} alt="Active Like" />
                            </div>
                            <img className="main-img" width={265} height={265} src={img} alt="Icon" />
                        </div>
                        <div className="like-bottom">
                            <h3>{e.title}</h3>
                            <p className={e.chegirma ? 'del' : ""}>{e.price} uzs {e.chegirma && <del>{e.oldPrice} uzs</del>}</p>
                        </div>
                    </li>
                    ))
                : <Err />}
            </ul>
            <div className={openCategory ? "bottom" : "bottom bottom-close"}>
                <p>Like</p>
                <button onClick={() => setOpenCategory(!openCategory)}><img src={vector} alt="Arrov" /></button>
            </div>
        </section>
    );
}

export default HeroLike;
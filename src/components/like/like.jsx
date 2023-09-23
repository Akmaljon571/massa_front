import { useEffect, useState } from 'react';
import vector from '../../img/Vector 255 OQ.svg'
import { api } from '../../content/start';
import { useNavigate } from 'react-router-dom'
import Err from '../../html/err';
import './like.scss'

function HeroLike() {
    const [ openCategory, setOpenCategory ] = useState(true)
    const [like, setLike] = useState([]);
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        if (token) {
            fetch(api + 'user/like')
            .then(re => re.json())
            .then(data => setLike(data))
        }
    }, [setLike, token]);

    return (  
        <section className="like">
            <ul className={openCategory ? "top" : 'none'}>
                {like?.length ?
                    like.map((e, i) => (
                        <li onClick={() => navigate(`/product/${e._id}`)} key={i}>
                            {e.title}
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
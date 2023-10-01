import { useEffect, useState } from 'react';
import vector from '../../img/Vector 255 OQ.svg'
import { api } from '../../content/start';
import { useNavigate } from 'react-router-dom'
import err from '../../img/error-6482984_960_720.webp'
import img from '../../img/rasm6.png'
import activeLike from '../../img/active-like.svg'
import './like.scss'
import useStart from '../../hooks/useStart';
import { message } from 'antd';

function HeroLike() {
    const [ openCategory, setOpenCategory ] = useState(true)
    const [like, setLike] = useState([]);
    const navigate = useNavigate()
    const { token } = useStart()
    const { counts, setCounts } = useStart()
    const [messageApi, contextHolder] = message.useMessage();

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
    }, [setLike, token, counts]);

    const clickLike = (e, find) => {
        const _class = e.target.className.split(' ')[0]

        if (_class === 'likeActive') {
            messageApi.open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 0,
            });
            fetch(api + `user/like/${find.like_id}`, {
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
        } else {
            navigate('/product/' + find._id)
        }
    }

    return (  
        <section className="like">
            {contextHolder}
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
                : <img width={400} style={{marginLeft: '450px', marginTop: "-33px"}} src={err} alt="Error page" />}
            </ul>
            <div className={openCategory ? "bottom" : "bottom bottom-close"}>
                <p>Like</p>
                <button onClick={() => setOpenCategory(!openCategory)}><img src={vector} alt="Arrov" /></button>
            </div>
        </section>
    );
}

export default HeroLike;
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../content/start";
import vector from '../../img/Vector 255 OQ.svg'
import './heroList.scss'

function HeroList() {
    const location = useLocation().pathname.split('/')[2]
    const [category, setCategory] = useState([]);
    const [open, setOpen] = useState(true);
    const findCategory = category.find(e => e._id === location)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(api + 'category')
        .then(re => re.json())
        .then(data => setCategory(data))
    }, [setCategory]);
    

    return (  
        <section className={open ? "hero-list" : "hero-list close"}>
            <ul className="top">
                {category?.length ?
                    category.map((e, i) => (
                        <li onClick={() => navigate(`/category/${e._id}`)} className={e._id === location ? "active" : ""} key={i}>
                            {e.title}
                        </li>
                    ))
                : null}
            </ul>
            <div className="bottom">
                <p>{findCategory ? findCategory?.title : null}</p>
                <button onClick={() => setOpen(!open)}><img src={vector} alt="Arrov" /></button>
            </div>
        </section>
    );
}

export default HeroList;
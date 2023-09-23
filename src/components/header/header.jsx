import like from '../../img/like.svg'
import order from '../../img/shop.svg'
import profile from '../../img/person.svg'
import logo from '../../img/logo.svg'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from '../../content/start';
import './header.scss'
import useStart from '../../hooks/useStart';

function Header() {
    const [category, setCategory] = useState([]);
    const { openCategory } = useStart()
    const location = useLocation().pathname.split('/')[1] === 'category' ? true : false

    useEffect(() => {
        fetch(api + 'category')
        .then(re => re.json())
        .then(data => {
            setCategory(data.slice(0, 5))
        })
    }, [setCategory]);

    return (
        <>
            <header className="header">
                <div className="header_left">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <ul>
                        {category?.length ? category.map(e => (
                            <li key={e._id}>
                                <hr />
                                <Link to={`/category/${e._id}`}>{e.title}</Link>
                            </li>
                        )) : null}
                    </ul>
                </div>
                <div className="header_media">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div>
                        {openCategory && location ? null : 'Menu'}
                    </div>
                </div>
                <div className="header_right">
                    <i>English</i>
                    <hr className='hr' />
                    <div className="header_page">
                        <Link to="/profile">
                            <img src={profile} alt="Profile icon" />
                        </Link>
                        <hr />
                        <Link to="/like">
                            <img src={like} alt="like icon" />
                        </Link>
                        <hr />
                        <Link to="/order">
                            <img src={order} alt="Order icon" />
                        </Link>
                    </div>
                </div>
            </header>
        </> 
    )
}

export default Header
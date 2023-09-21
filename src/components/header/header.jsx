import like from '../../img/like.svg'
import order from '../../img/shop.svg'
import profile from '../../img/person.svg'
import logo from '../../img/logo.svg'
import { useEffect, useState } from 'react';
import { api } from '../../content/start';
import './header.scss'

function Header() {
    const [category, setCategory] = useState([]);

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
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <ul>
                        {category?.length ? category.map(e => (
                            <li key={e._id}>
                                <hr />
                                <a href={`/category/${e._id}`}>{e.title}</a>
                            </li>
                        )) : null}
                    </ul>
                </div>
                <div className="header_media">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <div>
                        Menu
                    </div>
                </div>
                <div className="header_right">
                    <i>English</i>
                    <hr className='hr' />
                    <div className="header_page">
                        <a href="/profile">
                            <img src={profile} alt="Profile icon" />
                        </a>
                        <hr />
                        <a href="/like">
                            <img src={like} alt="like icon" />
                        </a>
                        <hr />
                        <a href="/order">
                            <img src={order} alt="Order icon" />
                        </a>
                    </div>
                </div>
            </header>
        </> 
    )
}

export default Header
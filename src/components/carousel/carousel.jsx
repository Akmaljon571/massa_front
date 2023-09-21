import './carousel.scss'
import yozuv from '../../img/Group 48097759.png'
import rasm from '../../img/IMAGE_2022-10-29_15_55_14_1-removebg-preview 1.png'
import Container from '../container/container';
import { useState } from 'react';

function Carousel() {
    const [active, setActive] = useState(1);

    setTimeout(() => {
        if (active === 5) {
            setActive(1)
        } else {
            setActive(active + 1)
        }
    }, 5000);
    return (  
        <Container>
            <ul className='carousel-list'>
                <li className={active === 1 ? 'list-active' : ''}></li>
                <li className={active === 2 ? 'list-active' : ''}></li>
                <li className={active === 3 ? 'list-active' : ''}></li>
                <li className={active === 4 ? 'list-active' : ''}></li>
                <li className={active === 5 ? 'list-active' : ''}></li>
            </ul>
            <ul className='carousel'>
                <li className={active === 1 ? 'active' : active === 5 ? 'left-none' : 'right-none'}>
                    1
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 2 ? 'active' : active === 1 ? 'left-none' : 'right-none'}>
                    2
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 3 ? 'active' : active === 2 ? 'left-none' : 'right-none'}>
                    3
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 4 ? 'active' : active === 3 ? 'left-none' : 'right-none'}>
                    4
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 5 ? 'active' : active === 4 ? 'left-none' : 'right-none'}>
                    5
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
            </ul>
        </Container>
    );
}

export default Carousel;
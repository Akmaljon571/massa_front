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
    console.log(active)
    return (  
        <Container>
            <ul className='carousel'>
                <li className={active === 1 ? 'active' : ''}>
                    1
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 2 ? 'active' : ''}>
                    2
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 3 ? 'active' : ''}>
                    3
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 4 ? 'active' : ''}>
                    4
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
                <li className={active === 5 ? 'active' : ''}>
                    5
                    <img src={yozuv} alt="Yozuv" />
                    <img src={rasm} alt="Rasm" />
                </li>
            </ul>
        </Container>
    );
}

export default Carousel;
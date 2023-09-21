import Line from "../../html/line";
import img1_1 from '../../img/img1-1.png'
import img1_2 from '../../img/img1-2.png'
import img2_1 from '../../img/img2-1.png'
import img2_2 from '../../img/img2-2.png'
import img3_1 from '../../img/img3-1.png'
import img3_2 from '../../img/img3-2.png'
import img4_1 from '../../img/img4-1.png'
import img4_2 from '../../img/img4-2.png'
import Container from "../container/container";
import './hero.scss'

function Hero() {
    return (  
        <Container>
            <Line>all menu</Line>
            <ul className="hero">
                <li className="item1">
                    <img className="a" src={img1_2} alt="Images" />
                    <img src={img1_1} alt="Images" />
                </li>
                <li className="item2">
                    <img src={img2_2} alt="Images" />
                    <img src={img2_1} alt="Images" />
                </li>
                <li className="item3">
                    <img src={img3_2} alt="Images" />
                    <img src={img3_1} alt="Images" />
                </li>
                <li className="item4">
                    <img className="a" src={img4_2} alt="Images" />
                    <img src={img4_1} alt="Images" />
                </li>
            </ul>
        </Container>
    );
}

export default Hero;
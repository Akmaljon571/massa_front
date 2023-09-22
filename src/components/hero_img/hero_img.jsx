import Line from "../../html/line";
import see from '../../img/see all.png'
import vector from '../../img/vector-qora.svg'
import img1 from '../../img/rasm1.png'
import img2 from '../../img/rasm2.png'
import img3 from '../../img/rasm3.png'
import img4 from '../../img/rasm4.png'
import img5 from '../../img/rasm5.png'
import img6 from '../../img/rasm6.png'
import img7 from '../../img/rasm7.png'
import img8 from '../../img/rasm8.png'
import './hero_img.scss'

function HeroImg() {
    return (  
        <section>
            <Line>News product</Line>
            <div className="heroImg">
                <div className="left">
                    <h2>We have new  products</h2>
                    <button>
                        <img src={see} alt="See All" />
                        <img src={vector} alt="vector" />
                    </button>
                </div>
                <ul className="right">
                    <li className="img1">
                        <img src={img1} alt="img1" />
                    </li>
                    <li className="img2">
                        <img src={img2} alt="img2" />
                    </li>
                    <li className="img3">
                        <img src={img3} alt="img3" />
                    </li>
                    <li className="img4">
                        <img src={img4} alt="img4" />
                    </li>
                    <li className="img5">
                        <img src={img5} alt="img5" />
                    </li>
                    <li className="img6">
                        <img src={img6} alt="img6" />
                    </li>
                    <li className="img7">
                        <img src={img7} alt="img7" />
                    </li>
                    <li className="img8">
                        <img src={img8} alt="img8" />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default HeroImg;
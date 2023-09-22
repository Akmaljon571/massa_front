import Line from "../../html/line";
import see from '../../img/by brand.svg'
import vector from '../../img/vector-qora.svg'
import brand from '../../img/brand.png'
import './brand.scss'

function Brand() {
    return (  
        <section>
            <Line>by brand</Line>
            <div className="brand">
                <div className="left">
                    <h2>selection by brands</h2>
                    <button>
                        <img src={see} alt="See All" />
                        <img src={vector} alt="vector" />
                    </button>
                </div>
                <img className="right" src={brand} alt="brand" />
            </div>
        </section>
    );
}

export default Brand;
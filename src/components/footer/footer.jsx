import './footer.scss'
import Z from '../../img/Zood.svg'
import vector from '../../img/vector-oq.svg'
import footer_img from '../../img/footer.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="footer_top-left">
                    <p className='zood'>
                        <img src={Z} alt="z" />ood Pay
                    </p>
                    <p className="bilan">
                        Bilan <button>20% <img src={vector} alt="icon" /></button> chegirma
                    </p>
                </div>
                <img className='footer_img' src={footer_img} alt="Footer" />
            </div>
        </footer>
    )
}

export default Footer
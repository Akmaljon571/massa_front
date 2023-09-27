import { OnePro, Products } from "../../components";
import Line from "../../html/line";

function Product() {
    return ( 
        <>
            <OnePro />
            <Line children={'News product'} />
            <Products children={'1, 8'} />
        </>
    );
}

export default Product;
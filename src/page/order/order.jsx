import { HeroOrder, Main, Products } from "../../components";

function Order() {
    return (  
        <>
            <Main>
                <HeroOrder />
                <Products children={'1, 8'} />
            </Main>
        </>
    );
}

export default Order;
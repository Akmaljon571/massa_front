import { HeroOrder, Main, Pagination, Products } from "../../components";

function Order() {
    return (  
        <>
            <Main>
                <HeroOrder />
                <Products children={'1, 16'} />
                <Pagination />
                <Products children={'2, 8'} />
            </Main>
        </>
    );
}

export default Order;
import { Footer, Header, HeroOrder, Main, Pagination, Products } from "../../components";

function Order() {
    return (  
        <>
            <Header />
            <Main>
                <HeroOrder />
                <Products children={'1, 16'} />
                <Pagination />
                <Products children={'2, 8'} />
            </Main>
            <Footer />
        </>
    );
}

export default Order;
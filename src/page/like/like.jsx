import { Footer, Header, HeroLike, Main, Pagination, Products } from "../../components";

function Like() {
    return (  
        <>
            <Header />
            <Main>
                <HeroLike />
                <Products children={'1, 16'} />
                <Pagination />
                <Products children={'2, 8'} />
            </Main>
            <Footer />
        </>
    );
}

export default Like;
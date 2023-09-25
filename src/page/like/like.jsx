import { HeroLike, Main, Pagination, Products } from "../../components";

function Like() {
    return (  
        <>
            <Main>
                <HeroLike />
                <Products children={'1, 16'} />
                <Pagination />
                <Products children={'2, 8'} />
            </Main>
        </>
    );
}

export default Like;
import { HeroLike, Main, Products } from "../../components";

function Like() {
    return (  
        <>
            <Main>
                <HeroLike />
                <Products children={'1, 8'} />
            </Main>
        </>
    );
}

export default Like;
import { useLocation } from "react-router-dom";
import { Footer, Header, Main, Pagination, Products } from "../../components";
import useStart from "../../hooks/useStart";
import Line from "../../html/line";

function Category() {
    const location = useLocation().pathname.split('/')[2]
    const { page } = useStart()

    const children = `${page}, 16, ${location}`
    const children2 = `${page}, 8, ${location}`
    return ( 
        <>
            <Header />
                <Main>
                    <Products children={children} />
                    <Pagination />
                    <Line children={'taqir tuqur'} />
                    <Products children={children2} />
                </Main>
            <Footer />
        </>
    );
}

export default Category;
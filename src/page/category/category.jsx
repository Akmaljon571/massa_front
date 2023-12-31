import { useLocation } from "react-router-dom";
import { HeroList, Main, Pagination, Products } from "../../components";
import useStart from "../../hooks/useStart";
import Line from "../../html/line";

function Category() {
    const location = useLocation().pathname.split('/')[2]
    const { page } = useStart()

    const children = `${page}, 16, ${location}`
    const children2 = `${page}, 8, ${location}`
    return ( 
        <>
            <Main>
                <HeroList />
                <Line children={'kaws product'} />
                <Products children={children} />
                <Pagination />
                <Line children={'taqir tuqur'} />
                <Products children={children2} />
            </Main>
        </>
    );
}

export default Category;
import { Main, Carousel, Hero, HeroImg, Brand } from '../../components'
import Acessuars from '../../html/acessuars';
import HomePro from '../../html/home-pro';

function Home() {
    return ( 
       <>
            <Carousel />
            <Main>
                <Hero />
                <HeroImg />
                <HomePro />
                <Brand />
                <Acessuars />
            </Main>
       </>
    );
}

export default Home;
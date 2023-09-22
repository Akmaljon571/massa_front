import { Header, Main, Footer, Carousel, Hero, HeroImg, Brand } from '../../components'
import Acessuars from '../../html/acessuars';
import HomePro from '../../html/home-pro';

function Home() {
    return ( 
       <>
            <Header />
            <Carousel />
            <Main>
                <Hero />
                <HeroImg />
                <HomePro />
                <Brand />
                <Acessuars />
            </Main>
            <Footer />
       </>
    );
}

export default Home;
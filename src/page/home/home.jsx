import { Header, Main, Footer, Carousel, Hero, HeroImg, Brand } from '../../components'
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
            </Main>
            <Footer />
       </>
    );
}

export default Home;
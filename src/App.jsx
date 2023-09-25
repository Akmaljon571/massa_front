import './App.scss';
import { Container, Footer, Header } from './components';
import Routers from './routes/routes';

function App() {
    return (
      <Container>
        <Header />
        <Routers />
        <Footer />
      </Container>
    )
}

export default App;

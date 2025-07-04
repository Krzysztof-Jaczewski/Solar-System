import SolarSystem from 'components/SolarSystem';
import GlobalStyle from 'styles/global';

const Home = () => {
    return (
        <>
            <GlobalStyle />
            <main
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '2rem',
                }}
            >
                <h1>🌌 Solar System</h1>
                <SolarSystem />
            </main>
        </>
    );
};

export default Home;

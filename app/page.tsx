import Planet from '../components/Planet';
import GlobalStyle from '../components/Planet';

export default function Home() {
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
                <Planet />
            </main>
        </>
    );
}

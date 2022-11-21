import MainMenu from '../Menu/Menu'

function Header() {
    return (
        <header className="App-header">
            <MainMenu />
            <section className="App-logo-devuei">
                <img src={require('../../devuei.svg').default} alt='Devuei Logo' />
            </section>
        </header>
    )
}

export default Header
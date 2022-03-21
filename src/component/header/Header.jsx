import './Header.css'

const Header = ({ children }) => {

    return (
        <section id="header">
            <div className="nav-bar">
                <div className="nav-logo">
                    <h1>DJ.MPP</h1>
                </div>
                <div className="nav-addactivity">
                    <h1>{children}</h1>
                </div>
            </div>
        </section>
    )
};

export default Header;
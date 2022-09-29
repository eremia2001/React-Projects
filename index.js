function Header()
{
    return(
        <header className="menu-header">
            <img src="reactIcon.png" className="menu-icon"/>
            <ul className="menu-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

function MainContent()
{
    return(
        <div>
            <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2003</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Its maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}
function Footer()
{
    return(
        <footer>
            <small>@ 2022 Rifat Company. All Right reserved.</small>
        </footer>
    )
}

function Page()
{
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}




ReactDOM.render(

<Page/>
,document.getElementById("root"))
import './NavStyle.scss'
const Nav = () =>{
    return (
        <header className= "header">
            <nav className ="nav"> 
            <div className= "title_container">
                <h1 className= "nav_title">Ananké Bernal</h1>
            </div>
            <ul className= "links">
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact Me</li>
            </ul>

            </nav>
        </header>
    )
} 
export default Nav
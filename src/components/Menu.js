import { NavLink } from "react-router-dom"

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li><NavLink to="/add" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Ajouter un techno</NavLink></li>
                <li><NavLink to="/list" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Liste des technos</NavLink></li>
            </ul>
        </div>
    )
}
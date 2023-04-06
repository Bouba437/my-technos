import { NavLink } from "react-router-dom"

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/add">Ajouter un techno</NavLink></li>
                <li><NavLink to="/list">Liste des technos</NavLink></li>
            </ul>
        </div>
    )
}
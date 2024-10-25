import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="navBar">
            <NavLink to='/' activeClassName="active">Home</NavLink>
            <NavLink to='/characters-browse' activeClassName="active">Browse Characters</NavLink>
            <NavLink to='/character-detail/:id' activeClassName="active">Character Detail</NavLink>
            <NavLink to='/comics' activeClassName="active">Comics</NavLink>
        </nav>
    )
}

export default NavigationBar
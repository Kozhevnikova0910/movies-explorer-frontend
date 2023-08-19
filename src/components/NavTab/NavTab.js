import './NavTab.css';

export function NavTab() {
  return(
    <nav className="nav-tab">
        <ul className="nav-tab__items">
            <li>
                <a href="src/components/NavTab/NavTab#" className="nav-tab__link">О проекте</a>
            </li>
            <li>
                <a href="src/components/NavTab/NavTab#" className="nav-tab__link">Технологии</a>
            </li>
            <li>
                <a href="src/components/NavTab/NavTab#" className="nav-tab__link">Студент</a>
            </li>
        </ul>
    </nav>
  )
}
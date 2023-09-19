import { ReactComponent as NavMenu } from './menu.svg';




function Menu () {
  return(
    <div className="container menu-block">
      <nav className="left-menu">
        <button>Купить</button>
        <button>Снять</button>
      </nav>
      <nav className="right-menu">
        <ul>
          <li>Продажа недвижимости</li>
          <li>Онлайн оценка</li>
          <li>Юридические услуги</li>
          <li>Вакансии</li>
          <li>Контакты</li>
          <li><NavMenu/></li>
         
        </ul>
      </nav>

    </div>

  )
}

export default Menu;
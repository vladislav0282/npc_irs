import React from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
            <Link to='/main' activeClassName={classes.active}>Главное окно программы</Link>
            </div>
            <hr/>
            <div className={classes.item}>
            <Link to='/info' activeClassName={classes.active}>Информация о программе</Link>
            </div>
            <hr />
            <div className={classes.item}>
            <Link to='/tasks' activeClassName={classes.active}>Задачи программы</Link>
            </div>
            <hr />
            <div className={classes.item}>
            <Link to='/statistics' activeClassName={classes.active}>Статистика</Link>
            </div>
            <hr />
            <div className={classes.item}>
            <Link activeClassName={classes.active} to="/profile">Коментарии</Link>
            <hr/>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
            <Link to="/dialogs" activeClassName={classes.active}>Сообщения</Link>
            </div>          
            <hr/>
            <div className={classes.item}>
            <Link to='/plannings' activeClassName={classes.active}>Планирование поставок</Link>
            </div>
        </nav>
    )
}

export {Navbar};
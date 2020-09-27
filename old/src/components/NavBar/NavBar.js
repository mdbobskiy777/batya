import React from "react";
import S from "./navBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div className = {S.navBar}>
            <div>
                <NavLink to = {"/profile"}  activeClassName = {S.active} >Профиль</NavLink>
            </div>
            <div>
                <NavLink to={"/users"}  activeClassName = {S.active} >Люди</NavLink>
            </div>
            <div>
                <NavLink to={"/dialogs"}  activeClassName = {S.active} >Диалоги</NavLink>
            </div>
            <div>
                <NavLink to={"/music"}  activeClassName = {S.active} >Музыка</NavLink>
            </div>
            <div>
                <NavLink to={"/news"}  activeClassName = {S.active} >Новости</NavLink>
            </div>
        </div>
    )
}
export default NavBar;
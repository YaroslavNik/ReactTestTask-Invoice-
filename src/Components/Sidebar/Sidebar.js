import React, { useState } from 'react'
import s from './Sidebar.module.sass'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <div className = {`${s.sidebar} ${openSidebar ? s.sidebarOpen : ''}`}>
            <div className = {s.toggleSidebar} onClick = {() => setOpenSidebar(!openSidebar)}>
                <span/>
                <span/>
                <span/>
            </div>
            <div className = {s.sidebarAvatar}>
                <img src = {userData.avatar_url} alt = "avatarka"/>
            </div>
            <div className = {s.sidebarLinks}>
                <NavLink className = {s.sidebarLink} activeClassName = {s.sidebarLinkActive} to = '/terminals'>Терминалы</NavLink>
                <NavLink className = {s.sidebarLink} activeClassName = {s.sidebarLinkActive} to = '/buyers'>Покупатели</NavLink>
            </div>
        </div>
    )
}

export default Sidebar

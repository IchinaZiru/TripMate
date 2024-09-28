import React from 'react'
import { SidebarData } from './SidebarData'
import { validateHeaderValue } from 'http'

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((value, key) => {
                    return (
                        <li>
                            <div id="icon">{value.icon}</div>
                            <div id="icon">{value.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Sidebar
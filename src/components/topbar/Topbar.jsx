import React from 'react'
import "./topbar.css"
import {NotificationsNone} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <sp className="logo">Lammaadmin</sp>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

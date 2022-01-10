import React from 'react'
import './Sidebar.css'
import { RssFeed, Event, School, WorkOutline, HelpOutline, Bookmark, Group, PlayCircleFilledOutlined, Chat } 
from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Chats</span>
                    </li>
                    <li className='sidebarListItem'>
                        <PlayCircleFilledOutlined className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Group className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Bookmarks</span>
                    </li>
                    <li className='sidebarListItem'>
                        <HelpOutline className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className='sidebarListItem'>
                        <WorkOutline className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Jobs</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className='sidebarListItem'>
                        <School className='sidebarIcon'/>
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHR'/>
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 1</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 2</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 3</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 4</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 5</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 6</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 7</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 8</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 9</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src='/assets/default-profile.png' alt=''></img>
                        <span className='sidebarFriendName'>Fake friend 10</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div id='header'>
                <div id='header-logo'>
                    <h2>Cody Rademacher - <span>Bray Real Estate Group</span></h2>
                </div>

                <nav>
                    <ul>
                        <li class="item"><a href="#">HOME</a></li>
                        <li class="item"><a href="#">BUYERS</a></li>
                        <li class="item"><a href="#">SELLERS</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
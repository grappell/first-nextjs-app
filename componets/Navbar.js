
export default function Navbar () {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavListElement props={{ href: "./#home", text: "Home"}}><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="house"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-house fa-w-16 fa-9x">
                    <g className="fa-group">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        ria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="house"
                        role="img"
                        viewBox="0 0 24 24"
                        id="house-icon"><path d="M19,11v9h-5v-6h-4v6H5v-9H3.6L12,3.4l8.4,7.6H19z" opacity="0.3" className="fa-secondary"></path>
                        <path d="M20,21h-7v-6h-2v6H4v-9H1l11-9.9L23,12h-3V21z M15,19h3v-8.8l-6-5.4l-6,5.4V19h3v-6h6V19z" opacity="0.8" className="fa-primary"></path>
                        </svg>
                    </g>
                </svg>
                </NavListElement>
                <NavListElement props={{ href: "#", text: "Space"}}> <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="space-station-moon-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
                >
                    <g className="fa-group">
                    <path 
                        fill="currentColor"
                        d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
                        className="fa-secondary"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
                        className="fa-primary"
                    ></path>
                    </g>
                </svg>
                </NavListElement>
                <NavListElement props={{ href: "./about", text: "About Me"}}><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="space-shuttle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
                >
                    <g className="fa-group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 172 172"
                        className="aboutme-icon">
                            <g>
                            <path d="M0,172v-172h172v172z" className="fa-secondary" opacity='0.1'></path><g className="fa-primary">
                                <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
                            </g></g></svg>
                    </g>
                    </svg>
                </NavListElement>
                <NavListElement props={{ href: "#", text: "Moon"}}><svg
                    id="lightIcon"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="moon-stars"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                >
                    <g className="fa-group">
                    <path
                        fill="currentColor"
                        d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                        className="fa-secondary"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                        className="fa-primary"
                    ></path>
                    </g>
                </svg>
                </NavListElement>
                <NavListElement props={{ href: "https://github.com/grappell", text: "GitHub"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </NavListElement>
            </ul>
        </nav>
    )
}


const NavListElement = ({props, children}) => {
    return(
        <li className="nav-item">
            <a href={props.href} className="nav-link">
            {children}
          <span className="link-text">{props.text}</span>
            </a>
        </li>
    )
}
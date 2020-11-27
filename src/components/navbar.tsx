import React, {useState} from "react";
import { Link } from "gatsby";
import { links, newLinks } from './navbarLinks';
import { AnchorLink } from "gatsby-plugin-anchor-links";

let showMobileMenuChildren = true;

export default function Navbar() {
    const [showMobileMenuChildren, setShowMobileMenuChildren] = useState(false);


    // const gatsbyLinks = links.map(x =>
    //     <Link to={x.endpoint} activeClassName="current" key={x.text}>
    //         {x.text}
    //     </Link>
    // );
    // const to = '#' + window.location.href.split('#')[1];

    const gatsbyLinks = newLinks.map(x =>
        <AnchorLink to={x.to} key={x.text}>
            {x.text}
        </AnchorLink>
    );

    return <>
        <button className='mobile-navbar-menu-button' onClick={() => setShowMobileMenuChildren(!showMobileMenuChildren)} aria-label='Menu'>
            <svg height={20} width={20}>
                <rect x={0} y={(20-3) * 0/3 + 3} width={20} height={3}/>
                <rect x={0} y={(20-3) * 1/3 + 3} width={20} height={3}/>
                <rect x={0} y={(20-3) * 2/3 + 3} width={20} height={3}/>
            </svg>
        </button>
        <nav className={'mobile-navbar' + (showMobileMenuChildren ? '' : ' hidden')}>
            {gatsbyLinks.map((x, i) => <div className={showMobileMenuChildren ? '' : 'hidden'} key={i} onClick={() => setShowMobileMenuChildren(false)}>{x}</div>)}
        </nav>
        <nav className='navbar' id='navbar'>
            {gatsbyLinks}
        </nav>
    </>;
}


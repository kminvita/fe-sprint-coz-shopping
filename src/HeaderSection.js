import './HeaderSection.css';
import logo from './img/logo.png';
import hamburger from './img/hamburger.png';
import { Link } from "react-router-dom";
import { Dropdown } from './Dropdown';
import { useState, useEffect, useRef } from "react";


const HeaderSection = () => {
    const dropsownRef = useRef(null);
    const [DropdownOpen, setDropdownOpen] = useState(true);

    const handleDropdown = ({target}) => {
        if (DropdownOpen && !dropsownRef.current.contains(target))
        setDropdownOpen(false);
    };

    useEffect(() => {
        window.addEventListener("click", handleDropdown);
        return () => {
            window.removeEventListener("click", handleDropdown);
        };
    });

    return (
        <div className="HeaderSection">
            <div className="header-left">
                <div className='shopLogo'>
                    <Link to="/">
                        <img src={logo} />    
                    </Link>
                </div>
                <div className='shopName'>
                  <div id="cozShopping">coz-shopping</div>
                </div>
            </div>
            <div className='header-right'>
                <img 
                className='hamburger' 
                src={hamburger}
                onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!DropdownOpen);
                }}
                 />
                 {DropdownOpen && <Dropdown dropsownRef={dropsownRef} />}
            </div>
        </div>
    );
};

export default HeaderSection;
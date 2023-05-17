import './HeaderSection.css';
import logo from './img/logo.png';
import hamburger from './img/hamburger.png';
import { Link } from "react-router-dom";
import { Dropdown } from './Dropdown';
import { useEffect, useState, useRef } from 'react';


const HeaderSection = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const handleDropdown = (e) => {
        if (isDropdownOpen && !dropdownRef.current.contains(e.target))
        setIsDropdownOpen(false);
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
                        <img 
                        src={logo} 
                        alt="logo"/>    
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
                    alt="hamburger"
                    onclick={(e) => {
                        e.stopPropagation();
                        setIsDropdownOpen(!isDropdownOpen);
                    }}
                />
                {isDropdownOpen && (
                    <Dropdown
                        dropdownRef={dropdownRef}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                )}
            </div>
        </div>
    );
};

export { HeaderSection };
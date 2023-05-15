import './HeaderSection.css';
import logo from './img/logo.png';
import hamburger from './img/hamburger.png';


const HeaderSection = () => {

    return (
        <div className="HeaderSection">
            <div className="header-left">
                <div className='shopLogo'>
                    <img src={logo} />
                </div>
                <div className='shopName'>
                  <div id="cozShopping">coz-shopping</div>
                </div>
            </div>
            <div className='header-right'>
                <img 
                className='hamburger' 
                src={hamburger}
                 />
            </div>
        </div>
    );
};

export default HeaderSection;
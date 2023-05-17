import productImg from './img/product.png';
import bookmarkImg from './img/bookmark.png';
import bio from './img/bio.JPG';
import './Dropdown.css';
import { Link } from "react-router-dom";

const Dropdown = () => {
   
    return (
        <div className="menu-container">
            <div className="dropdown-menu">
                <h3><img className="bio" src={bio} alt="bio" /><br/>
                    김민지님, 안녕하세요!<br/>
                    <Link to="/products/list">
                        <DropdownItem img={productImg} text={"상품리스트 페이지"} />
                    </Link>
                    <Link to="/bookmark">
                       <DropdownItem img={bookmarkImg} text={"북마크페이지"} />
                    </Link>
                </h3>
            </div>
        </div>
    )
}

const DropdownItem = (props) => {
    return (
        <div className="dropdownItem">
            <img src={props.img} alt="{props.img}"></img>
            <a>{props.text}</a>
        </div>
    );
}

export { Dropdown };
import { Link } from "react-router-dom";
import productImg from './img/product.png';
import bookmarkImg from './img/bookmark.png';
import bio from './img/bio.JPG';
import './Dropdown.css';

const Dropdown = () => {
    return (
        <div className="menu-container">
            <div className="dropdown-menu">
                <h3><img className="bio" src={bio} alt="bio" /><br/>
                    김민지님, 안녕하세요!<br/>
                    <DropdownItem Link to={"/products/list"} img={productImg} text={"상품리스트 페이지"} />
                    <DropdownItem link to={"/bookmark"} img={bookmarkImg} text={"북마크페이지"} />
                </h3>
            </div>
        </div>
    )
}

const DropdownItem = (props) => {
    return (
        <div className="dropdownItem">
            <Link to={props.Link} />
            <img src={props.img}></img>
            <a>{props.text}</a>
        </div>
    );
}

export { Dropdown };
import { Link } from "react-router-dom";
import productImg from './img/product.png';
import bookmarkImg from './img/bookmark.png';
import './Dropdown.css';

const Dropdown = () => {
    return (
        <div className="Container">
            <p className="welcome">김민지님, 안녕하세요!</p>
            <div className="Menu">
                    <span className="intoProductsPage">
                        <Link to="/products/list">
                            <img className="proimg" src={productImg} alt="productspage" />
                                상품리스트 페이지
                        </Link>
                    </span>
                    <span className="intoBookmarkPage">
                        <Link to="/bookmark">
                            <img className="bookmarkimg" src={bookmarkImg} alt="bookmarkpage" />
                            북마크페이지    
                        </Link>
                    </span>
            </div>
        </div>
    )
}

export { Dropdown };
import './styles.css';
import {Link} from "react-router-dom";

export default function CommonButton(props) {
    return (
        <div className="CommonButton">
            <Link to={props.routeTo || '/'}>
                <img src={props.imageSrc}/>
                { props.children }
            </Link>
        </div>


    );
}


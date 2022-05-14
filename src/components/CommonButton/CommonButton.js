import './styles.css';
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function CommonButton(props) {
    return (
        <div
            className={classNames({
                'CommonButton': true,
                'CommonButton--animated': !!props.animated,
            })}
        >
            <Link to={props.routeTo || '/'}>
                <img src={props.imageSrc}/>
                { props.children }
            </Link>
        </div>
    );
}
import './styles.css';

export default function TheHeader(props) {
    return (
        <header className="TheHeader">

            { props.children }
        </header>
    );
}
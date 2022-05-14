import './styles.css';

export default function TheHeader(props) {
    return (
        <header className="TheHeader">
            <button>
                login
            </button>
            <span>
                Somespan
            </span>
            <button>
                logout
            </button>
            { props.children }
        </header>
    );
}
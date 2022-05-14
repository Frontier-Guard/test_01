import './styles.css';

const formatString = (str) => (str || '').split('').reverse().join('')

export default function ItemCard(props) {
    return (
        <div className="ItemCard">
            <div>
                Какая-то карточка товара
            </div>
            <div>{ formatString(props.name) }</div>
            { props.children }
        </div>
    );
}
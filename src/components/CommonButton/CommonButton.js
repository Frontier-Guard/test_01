import './styles.css';

export default function CommonButton(props) {
    return (
        <div className="CommonButton">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/250px-HumanRightsLogo.svg.png"}/>

            { props.children }
        </div>
    );
}
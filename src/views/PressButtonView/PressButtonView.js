import React from "react";
import './styles.css';
import CommonButton from "../../components/CommonButton/CommonButton";

export default function PressButtonView(props) {
    return (
        <React.Fragment>
            <div className={'PressButtonView'}>
                <CommonButton
                    routeTo={'/main'}
                    imageSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/250px-HumanRightsLogo.svg.png"}
                    animated={true}
                />
            </div>
        </React.Fragment>
    );
}
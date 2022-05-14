import React from "react";
import './styles.css';
import CommonButton from "../../components/CommonButton/CommonButton";

export default function PressButtonView(props) {
    return (
        <React.Fragment>
            <div className={'PressButtonView'}>
                <CommonButton/>
            </div>
        </React.Fragment>
    );
}
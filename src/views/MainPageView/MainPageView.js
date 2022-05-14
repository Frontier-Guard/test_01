import React from "react";
import './styles.css';
import ItemCard from "../../components/ItemCard/ItemCard";
import ToxaProfileCard from "../../components/ToxaProfileCard/ToxaProfileCard";
import CommonButton from "../../components/CommonButton/CommonButton";


export default function MainPageView(props) {
    return (
        <React.Fragment>
            <div className={'MainPageView'}>
                <CommonButton className={"BackButton"}>
                <button>назад</button>
                </CommonButton>
            </div>
        </React.Fragment>
    );
}
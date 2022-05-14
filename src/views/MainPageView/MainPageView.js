import React from "react";
import './styles.css';
import ItemCard from "../../components/ItemCard/ItemCard";
import ToxaProfileCard from "../../components/ToxaProfileCard/ToxaProfileCard";

export default function MainPageView(props) {
    return (
        <React.Fragment>
            <div className={'MainPageView'}>
                <ItemCard
                    name={'Антон Ткаченко'}
                />
                <ItemCard>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </ItemCard>
                <ItemCard>
                    Товар№2
                </ItemCard>
                <ItemCard>
                    Товар№3
                </ItemCard>
                <ToxaProfileCard/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </React.Fragment>
    );
}
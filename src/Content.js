import React from "react";

const Content = (props) => {
    return (
        <main>
            <div id="card">
                <h3>{props.title}</h3>
                <img src={props.pic} alt={props.title} width="600px" height="400px"></img>
                <li classname="content">Sisältö</li>
            </div>
        </main>
    );
};

export default Content;

import React from "react";

function AppHeader(props) {
    return (
        <div className={props.className}>
            <h1>{props.children}</h1>
            <h2>{props.subTitle}</h2>
        </div>

    );
}

export default AppHeader;
import React from 'react';


function ListTasks(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
}

export { ListTasks };
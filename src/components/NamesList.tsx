import React from 'react';

import NameItem from './NameItem';

const NamesList = (props: { names: Array<Text>, onRemoveName: Function }) => (
    <ul className="list-group">
        {props.names.map((name, index) => (
            <NameItem key={index} name={name} onRemoveName={() => props.onRemoveName(name)}/>
        ))}
    </ul>
);

export default NamesList;
import React from 'react';

const NameItem = (props: { name: Text, onRemoveName: Function }) => (
    <div>
       <li className="list-group-item">
            <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => props.onRemoveName()}
            >
                X
            </button>

           {props.name}
        </li>
    </div>
);

export default NameItem;
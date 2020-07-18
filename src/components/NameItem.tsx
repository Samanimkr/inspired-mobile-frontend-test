import React from 'react';

const NameItem = (props: { name: string, onRemoveName: Function }) => (
    <div>
       <li className="list-group-item">
           {props.name}

           <button
                type="button"
                className="btn btn-sm btn-outline-danger float-right"
                onClick={() => props.onRemoveName()}
            >
                X
            </button>
        </li>
    </div>
);

export default NameItem;
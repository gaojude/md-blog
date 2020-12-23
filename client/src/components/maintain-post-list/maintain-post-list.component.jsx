import React from 'react';
import {Link} from "react-router-dom";

const MaintainPostList = ({ posts }) => {
    return (
        <div style={{
            'maxHeight': '65vh',
            'overflowY': 'auto'
        }}>
            <ul className={'list-group'}>
                {
                    posts.map(({_id, title}) =>
                        <Link key={_id} to={`/maintain/posts/edit/${_id}`} className={'list-group-item'}>
                            { title }
                        </Link>
                    )
                }
            </ul>
        </div>
    );
};

export default MaintainPostList;
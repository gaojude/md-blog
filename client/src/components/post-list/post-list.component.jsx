import React from 'react'
import MessageBox from "../message-box/message-box.component";
import {Link} from "react-router-dom";

const PostList = ({posts}) => {

    const generateBadges = (title) => {
        const rest = title.split(' ').filter(block => !(block[0] == '[' && block[block.length - 1] == ']'))
        const tags = title.split(' ').filter(block => block[0] == '[' && block[block.length - 1] == ']');
        return <span>
            {
                tags.map(tag => <span style={{
                    marginRight: '10px'
                }} className={`badge ${tag === "[Pin]" ? "badge-danger" : "badge-light"} `}>{ tag.substr(1, tag.length - 2) } </span>)
            }
            {rest.join(' ')}
        </span>
    }


    if (posts && posts.length > 0) {
        posts = [
            ...posts.filter(({title}) => title.length >= 5 && title.substr(0, 5) === "[Pin]"),
            ...posts.filter(({title}) => !(title.length >= 5 && title.substr(0, 5) === "[Pin]"))
        ]

        return (
            <div>
                {
                    posts.map(
                        ({_id, title}) =>
                            <ul className={'list-group list-group-flush'} key={_id}>
                                <Link className={'list-group-item text-secondary border-top  border-bottom my-2 m-50'} to={`/post/${_id}`}>
                                    {generateBadges(title)}
                                </Link>
                            </ul>
                    )
                }
            </div>
        )
    }
    else
        return <MessageBox message={'No posts in the database so far.'}/>
}


export default PostList;
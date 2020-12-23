import React  from 'react';
import {Link, Route, withRouter} from "react-router-dom";
import PostEditor from "../../components/post-editor/post-editor.component";
import {connect} from "react-redux";
import MaintainPostList from "../../components/maintain-post-list/maintain-post-list.component";
import {compose} from "redux";

const UpdatePage = ({posts}) => {
    return (
        <div>
            <h2>Update Posts</h2>
            <div className="fluid-container">
                <div className="row">
                    <div className={'col-md-2'}>
                        <div className="btn-group">
                            <Link to={'/maintain/posts/create'} className={'btn btn-primary'}>Create</Link>
                        </div>

                        <MaintainPostList posts={posts} />
                    </div>

                    <div className={'col-md-10'}>
                        <div>
                            <Route path='/maintain/posts/create' component={PostEditor}/>
                            <Route
                                path={'/maintain/posts/edit/:id'}
                                component={PostEditor}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    posts: state.post.posts
})

export default compose(connect(mapStateToProps), withRouter)(UpdatePage);
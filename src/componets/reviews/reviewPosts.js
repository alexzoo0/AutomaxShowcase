import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux';
import SinglePost from './singlePost/singlePost';



const ReviewPosts = ({ setCurrentId }) => {
    const Posts = useSelector((state) => state);
    console.log(Posts)

    return (
        !Posts.length ? <CircularProgress /> : (
            <Grid container alignitems="stretch" spacing={3}>
                {Posts.map((posts) => (
                    <Grid key={posts._id} item xs={12} sm={6} >
                        <SinglePost  post={posts} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
            
        )
    );
}

export default ReviewPosts;
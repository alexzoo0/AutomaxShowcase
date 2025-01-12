import React from 'react';
import { Grid, Typography } from '@material-ui/core'

const SinglePost = ({ post }) => {

    
    return (
            <Grid className='comments'>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='h6'>{post.message}</Typography>
            </Grid>
        )
}

export default SinglePost;
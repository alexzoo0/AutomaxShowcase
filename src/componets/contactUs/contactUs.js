import React, {useState, useEffect} from 'react';


import { createReview } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';


const contactUs = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ name: '', message: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = async () => {
        setCurrentId(0); 
        setPostData({ name: '', message: ''});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === undefined) {
        dispatch(createReview(postData));
        clear();
        console.log('success');
        }else {
    
        console.log("required to fill every input")
        }
        console.log(postData);
        console.log(currentId);
    };
    
return(
    <section className='section3'>
        <div>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/' ><h1 className='title'>hello</h1></Link>
        </div>
    </section>
)

}

export default contactUs;
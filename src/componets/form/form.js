import React, {useState, useEffect} from 'react';
import Rating from '@mui/material/Rating';


import { createReview } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';


const Form = ({ currentId, setCurrentId }) => {
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
        
    };


    
return(
    <section className='section3'>
        <div>
          <h3 className='main4 checkout'>Leave<br /> us a <br /> review!</h3>
        </div>
        <div className='reviews'>
        <div className='review1'>
          <p className='paragraph1' >Customer Reviews</p>
          <Rating
            className='readOnly'
            readOnly
            defaultValue={2.5}
          ></Rating>
          <p className='paragraph2'>700 global ratings</p>
          </div>
          <div className='smallLogo'></div>
          <div className='lineDivide'></div>
          <form autoComplete='off' noValidate className='review' onSubmit={handleSubmit}>
            <p className='paragraph4'>Name</p>
            <input className='input1' name="name" placeholder='name'variant="outlined" label="Name"  value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value})} ></input>
            <p className='paragraph3'>Message</p>
            <input className='input2' placeholder='message'  name="message" variant="outlined" label="Message"  multiline="true" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} ></input>
            <p className='paragraph5'>Rate Us</p>
            <Rating
                className='controlled'
                controlled="true"
                onChange={(e) => setPostData({ ...postData, rating: e.target.value})}
                value={postData.rating}
            ></Rating>
            <div>
            <button className='sideButton'>submit</button>
            </div>
          </form>
        </div>
    </section>
)

}

export default Form;
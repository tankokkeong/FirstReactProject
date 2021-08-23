import { CKEditor } from 'ckeditor4-react';
import { useEffect, useState } from 'react';
import profileImage from '../images/profile.png'

const Home = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/posts")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            setPosts(data);
        })
    }, []);

    return ( 
        <div className="home-container">
            <div className="create-post-container">

                <div className="text-center mt-3 mb-3">
                    <h1>Create Post</h1>
                </div>
                <CKEditor />

                <div className="text-right mt-3">
                    <button className="btn btn-dark">Create Post</button>
                </div>
            </div>

            <div className="post-container">
                <div className="text-center">
                    <h2 className="font-weight-bold">Confession</h2>
                </div>

                <div className="list-container">
                    <div className="confession-post">
                        <div className="post-header">
                            <div className="post-header-col">
                                <img src={profileImage} alt="" className="profile-image"/>
                            </div>
                            
                            <div className="post-header-col">
                                <span className="author-name ml-3 font-weight-bold">Admin</span>

                                <div className="post-time-container">
                                    <span className="post-time ml-3">20:37 - 23 August 2020</span>
                                </div>
                            </div>
                        </div>

                        <div className="post-content mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate sint alias consectetur aliquam minus saepe, asperiores 
                            provident veniam, tenetur et laudantium? Veritatis cumque quod delectus 
                            odio nihil, magnam, exercitationem harum ut saepe beatae libero repellat 
                            id consectetur fugit deleniti. 
                            Ab rem corporis qui quae sed harum accusantium vel ducimus dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate sint alias consectetur aliquam minus saepe, asperiores 
                            provident veniam, tenetur et laudantium? Veritatis cumque quod delectus 
                            odio nihil, magnam, exercitationem harum ut saepe beatae libero repellat 
                            id consectetur fugit deleniti. 
                            Ab rem corporis qui quae sed harum accusantium vel ducimus dolore.
                        </div>

                        <div className="comment-section mt-2">
                            <i className="far fa-comment-alt"></i>
                            <span className="comment-count ml-2">40</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
}
export default Home;
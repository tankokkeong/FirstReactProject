import { CKEditor } from 'ckeditor4-react';

const Home = () => {
    return ( 
        <div class="home-container">
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
            </div>

        </div>
        
    );
}
export default Home;
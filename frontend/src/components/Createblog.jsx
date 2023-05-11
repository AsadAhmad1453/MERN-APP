import {useState} from 'react';
import {addBlog} from '../service/api';


const defaultValue={
    title:"",
    content:"",
    imageurl:"",
    category:""
}


export default function Createblog(){

    const addblogdetails=async () =>{

      await  addBlog(user);

    }

    
const[user, setUser]= useState({defaultValue});
    
    const onValueChange=(e)=>{
        console.log(e.target.value );
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
                }

   
    return(

        <>
        <div className="container slider">
        <div className="row mt-4">
                <div className="col-12 mt-4 d-flex justify-content-center">
                    <div className="home-heading mt-5">
                        <h2 className="mt-5">Write Your Blog</h2>
                        <p>Post your new blog today!!!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-4 formm">
            <div className="row mt-4">
                <div className="col-12 formm-group">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=> onValueChange(e)} name="title"></input>
                    </div>
                   
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Content</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> onValueChange(e)} name="content"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Image URL</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> onValueChange(e)} name="imageurl"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Category</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> onValueChange(e)} name="category"></textarea>
                    </div>
                    <button type="submit" className="submitt" onClick={()=> addblogdetails()}>Post</button>
                    </form>
                </div>

            </div>
        </div>
        </>

    );
}
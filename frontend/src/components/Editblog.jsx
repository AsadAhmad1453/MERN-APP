import {useState} from 'react';
import {editBlog} from '../service/api';
import { useEffect } from 'react';
import { loadblog } from '../service/api';
import {useNavigate, useParams} from 'react-router-dom';

const defaultValue={
    title:"",
    content:""
}


export default function Editblog(){

    const[user, setUser]= useState({defaultValue});
    const {id}= useParams();
   

    useEffect(()=>{
        loadblogdetails();
    },[])

    const loadblogdetails=async()=>{
        const response= await loadblog(id);
        setUser(response.data);
    }

    const editblogdetails=async () =>{

      await  editBlog(user,id);
    

    }
    
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
                        <h2 className="mt-5">Edit Your Blog</h2>
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
                        <input type="text" class="form-control" id="exampleFormControlInput1" value={user.title} onChange={(e)=> onValueChange(e)} name="title"></input>
                    </div>
                   
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Content</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={user.content}  onChange={(e)=> onValueChange(e)} name="content"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Category</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" value={user.category}  onChange={(e)=> onValueChange(e)} name="category"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Image(Url)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={user.imageurl}  onChange={(e)=> onValueChange(e)} name="imageurl"></textarea>
                    </div>
                    <button type="submit" className="submitt" onClick={()=> editblogdetails()}>Edit</button>
                    </form>
                </div>

            </div>
        </div>
        </>

    );
}
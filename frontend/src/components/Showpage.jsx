import {useState} from 'react';
import {editBlog} from '../service/api';
import { useEffect } from 'react';
import { loadblog } from '../service/api';
import {useNavigate, useParams} from 'react-router-dom';


export default function Showpage(){

    const[user, setUser]= useState([]);
    const {id}= useParams();
   

    useEffect(()=>{
        loadblogdetails();
    },[])

    const loadblogdetails=async()=>{
        const response= await loadblog(id);
        setUser(response.data);
    }

   
    return(

        <>
       
        <div className="container slider">
        <div className="row mt-4">
                <div className="col-12 mt-4 d-flex justify-content-center">
                    <div className="home-heading mt-5">
                        <h2 className="mt-5">Your Blog</h2>
                        <p>You can see and edit your blog here!!!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-4 formm">
            <div className="row mt-4">
                <div className="col-12 formm-group">
                <div class="card mb-3">
                    <img class="card-img-top " src={user.imageurl} alt="Card image cap" height="500px"></img>
                    <div class="card-body">
                        <h5 class="card-title">{user.title}</h5>
                        <p class="card-text">{user.content}</p>
                        <p class="card-text"><small class="text-muted">{user.category}</small></p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
        </>

    );
}
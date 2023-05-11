import { allblog } from "../service/api";
import { useEffect } from "react";
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {deleteblog} from '../service/api';


export default function Blog(){

    const[users, setUsers]=useState([]);
    useEffect(()=>{
        getallblogs();
    },[])
    const getallblogs=async ()=>{
        let response=  await allblog();
        setUsers(response.data);
      }
const deleteblogdetails=async(id)=>{

    await deleteblog(id);
    getallblogs();

    
}
    return(
        <>
        <div className="container slider">
            <div className="row mt-4">
                <div className="col-12 mt-4 d-flex justify-content-center">
                    <div className="home-heading mt-5">
                        <h2 className="mt-5">Edit Blogs</h2>
                        <p>Add More blogs for users !!!</p>
                    </div>
                </div>
            </div>
    
       
        </div>
    <div className="container mt-4">
        <div className="row mt-4">
        {
            users.map(user=>{
         
        return(
            <>
            
            <div className="col-4 mt-4" key={user._id}>
                    <div className="card">
                    <img class="card-img-top" src={user.imageurl} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">{user.title}</h5>
                        <p class="card-text">{user.category}</p>
                        <Link class="btn btn-warning" to={`/edit/${user._id}`} >Edit</Link>
                        <button className="btn btn-danger float-right" onClick={()=>deleteblogdetails(user._id)}>Delete</button>
                    </div>
                    </div>
                </div>
            </>
        );
            })
        }
        </div>
    </div>
        </>
    );

}
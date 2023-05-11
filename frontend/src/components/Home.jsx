import { getBlog } from "../service/api.js";
import { useEffect } from "react";
import {useState} from 'react';
import { searchblog } from "../service/api.js";
import {Link} from 'react-router-dom';
export default function Home(){
    const[users, setUsers]=useState([]);
    useEffect(()=>{
        getallblogs();
    },[])

    const getallblogs=async ()=>{
      let response=  await getBlog();
      setUsers(response.data);
    }

    const[value, setValue] = useState(""); 
    const handle=async()=> {
        let response=  await searchblog(value);
        setUsers(response.data);
    }
  
    return(
        <>
        <div className="container slider">
            <div className="row mt-4">
                <div className="col-12 mt-4 d-flex justify-content-center">
                    <div className="home-heading mt-5">
                        <h2 className="mt-5">Top Blogs</h2>
                        <p>Just doing it as a side hustle!!!</p>
                    </div>
                </div>
            </div>
        </div>

    <div className="container mt-4">
        <div className="row mt-4">
            {/* <div className="col-5">
            <input type="text" name="search" onChange={(e) => {setValue(e.target.value)}}></input>
       <button className="btn btn-danger" onClick={()=>handle()}>Search</button>
            </div> */}
     
            
        {
            users.map(user=>{
          
        return(
            <>
            
            
        <div className="col-6">
            <div className="row">
            <div class="col-sm-5">
          <img class="d-block w-100" src={user.imageurl} alt=""></img>
        </div>
        <div class="col-sm-7">
          <div class="card-block">
               <h4 class="card-title">{user.title}</h4>
                    <p>{user.category}</p>
               <br></br>
            <p>{user.content}</p>
          
            <Link to={`/showpage/${user._id}`} class="btn btn-primary btn-sm float-right">Blog Details</Link>
          </div>
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
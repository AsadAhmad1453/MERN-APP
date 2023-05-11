import axios from 'axios';

const URL='http://localhost:8000/';

export const addBlog=async (data)=>{

    try{

     return await axios.post(`${URL}add`,data);

    }catch(error){
        console.log('Error while handling api ', error);
    }
}


export const getBlog=async ()=>{
    try{
            return await axios.get(`${URL}all`);
    }catch(error){
        console.log('error while calling get user api',error);
    }
}

export const allblog=async ()=>{
    try{
            return await axios.get(`${URL}blogs`);
    }catch(error){
        console.log('error while calling get user api',error);
    }
}

export const loadblog=async (id)=>{
    try{

        return await axios.get(`${URL}${id}`);

    }catch(error){
        console.log('Error while calling getblog api', error);
    }
}

export const editBlog= async(user,id)=>{
    try{

        return await axios.put(`${URL}${id}`,user);
   
       }catch(error){
           console.log('Error while handling editapi ', error);
       }
}

export const deleteblog=async(id)=>{
        try{
    
            return await axios.delete(`${URL}${id}`);
            
        }catch(error){

            console.log('Error while calling delete user api ', error);

        }
}

export const searchblog=async(value)=>{
    try{

        return await axios.get(`${URL}${value}`);
        
    }catch(error){

        console.log('Error while calling search user api ', error);

    }
}
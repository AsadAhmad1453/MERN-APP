
import blog from '../model/blogmodel.js';


export const addBlog=async (request, response)=>{
    
    const Blog = request.body;

    const newBlog= new blog(Blog);

    try{

        await newBlog.save();
        response.status(201).json(newBlog);
     
    }catch(error){
        response.status(409).json(({message:error.message}));
    }
}

export const homeBlog=async(request, response)=>{
    try{
         const blogs= await blog.find({}).sort({_id:-1}).limit(5);
            response.status(200).json(blogs)
    }catch(error){
        response.status(404).json({message: error.message});

    }
}

export const allblog=async(request, response)=>{
    try{
         const blogs= await blog.find({});
            response.status(200).json(blogs)
    }catch(error){
        response.status(404).json({message: error.message});

    }
}

export const loadblog=async(request,response)=>{
  
    try{
        const blogg= await blog.findById(request.params.id);
           response.status(200).json(blogg);
           

   }catch(error){
       response.status(404).json({message: error.message});
  

   }
}

export const editblog=async(request,response)=>{
    let blogg= request.body;
    const editblog= new blog(blogg);
    try{
       
       await blog.updateOne({_id: request.params.id},editblog);
       response.status(201).json(editblog);

   }catch(error){
       response.status(409).json({message: error.message});
  

   }
}
export const deleteblog=async(request,response)=>{
    try{
        
       await blog.deleteOne({_id: request.params.id});
      response.status(200).json({message:'Blog deleted Sucesfully'});
    }catch(error){
           response.status(409).json({message: error.message});
    }
}
export const searchblog=async(request,response)=>{

    try{
        console.log("heyy");
        const blogg= await blog.find({category: request.params.value});
           response.status(200).json(blogg);
           

   }catch(error){
       response.status(404).json({message: error.message});
  

   }
}
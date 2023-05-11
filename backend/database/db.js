import mongoose  from "mongoose";


const connection=async (username,password)=>{

    const URL=`mongodb://${username}:${password}@ac-fsk13ko-shard-00-00.vcfljc1.mongodb.net:27017,ac-fsk13ko-shard-00-01.vcfljc1.mongodb.net:27017,ac-fsk13ko-shard-00-02.vcfljc1.mongodb.net:27017/?ssl=true&replicaSet=atlas-5i4e84-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

      await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
      console.log('database connected ')

    }catch(error){
        console.log('Error while connecting to mongodb',error);
    }



}

export default connection;
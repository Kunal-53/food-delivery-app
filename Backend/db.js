const mongoose = require('mongoose');

//const mongoURI='mongodb+srv://kunaldhariwal:33141806@cluster0.m4aa8up.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoURI='mongodb://kunaldhariwal:33141806@ac-u4qiput-shard-00-00.m4aa8up.mongodb.net:27017,ac-u4qiput-shard-00-01.m4aa8up.mongodb.net:27017,ac-u4qiput-shard-00-02.m4aa8up.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-bxpif8-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB = async () => {
  try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data = await fetched_data.find({}).toArray()

      global.food_items=data;
    


      let foodcategorey=  mongoose.connection.db.collection("food_categorey")
     
     let catdata=await foodcategorey.find({}).toArray()

     global.food_categorey=catdata;
     

     
      
    
    
      
      

    
    
   } catch (error) {
     console.error('Error connecting to MongoDB: ', error);
 }
};



module.exports= mongoDB;
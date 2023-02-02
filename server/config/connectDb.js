// import React from 'react'
import mongoose from 'mongoose'
import colors from 'colors'

mongoose.set('strictQuery', false);


const connectDb = async() => {
  try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server connected Successfully To Database`)

  }catch(e){
    
    console.log(`${e}`.bgRed);

  }
}

export default connectDb
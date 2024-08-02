
import mongoose from "mongoose"

export function connectKaro(){


    // mongodb+srv://goodapple:123456ANC@cluster0.hc9enae.mongodb.net

    // mongoose.connect('mongodb://localhost:27017/abcDB').then(function(connection){
    mongoose.connect('mongodb+srv://usman_khan:hello_cat@cluster0.hc9enae.mongodb.net/cat').then(function(connection){

        console.log(connection)
        console.log("db conncet hoyi")

    }).catch(function(err){
        console.log(err);
    });

}
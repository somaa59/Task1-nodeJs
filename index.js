import express from "express";
import { engine } from 'express-handlebars';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templets');


const students = [
    {
        id: 1,
        name: "somaa",
        city: "cairo"
    }
    ,
    {
        id: 2,
        name: "ahmed",
        city: "elkhadra"
    }
    ,
    {
        id: 3,
        name: "zizo",
        city: "elgharbia"
    }
    ,
    {
        id: 4,
        name: "hima",
        city: "elgharbia"
    }


];



// take two parametare 
/*
request   => get data from browser to nodeJs
response  => get data from nodeJS to browser
to be server relative install libirary nodemon
*/

function studentHtml (item){
    let output ="<ul>";
     output += "<li>" + item.id + "</li>";
     output += "<li>" + item.name + "</li>";
     output += "<li>" + item.city + "</li>";
    
    output += "</ul>"
    return output;
}

//---------------------------------------------------------
//---------------------------------------------------------

function studentsFunction(req, res) {
      res.render("students",{layout :false, students}); 
//     let output = "<ul>";
//     for (let i = 0; i < students.length; i++) {
//         const std = students[i];
//         output += "<li><a href='/students/" + std.id + "'>" + std.name + "</a></li>";
//     }
//     output += "</ul>"
//    res.send(output);

};

app.get("/students", studentsFunction);

app.get("/students/:id",function (req,res){
    //get id from browser using req.params 
    const id =req.params.id;
    //array name studen have id ,name ,city
    const student =students.find(function (item){
        return item.id == id ;
    });

    // res.send(studentHtml(student));
    //to use handlebars
    res.render("student",{layout :false, student});
});



app.listen(5000);


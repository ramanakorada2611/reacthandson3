import React,{ useState } from "react"
 
let Function=()=>{
   let[name,setName]=useState("")
   let[department,setDepartment]=useState("")
   let[rating,setRating]=useState("")
   let[want,setWant]=useState([])
    
   let [extra,setExtra]=useState("hand")
   let [another,setAnother]=useState("hand1")
   
  let Show=()=>{
   if(extra==="hand"){
      setExtra("hand1")
   }
   else if(extra==="hand1"){
      setExtra("hand")
   }
   if(another==="hand1"){
      setAnother("hand")
   }
   else if(another==="hand"){
      setAnother("hand1")
   }
  }

   let print=(val)=>{
      val.preventDefault()
     console.log(name,department,rating)
    if(name && department && rating){
      setName("")
      setDepartment("")
      setRating("")
      setWant((data)=>[...data,{name,department,rating}])
   }
   }
  return(
   <><center>
      <div className={extra}>
      <h1 className="color">EMPLOYEE FEEDBACK FORM</h1>
      <form onSubmit={print}>
         <label className="style"><span className="center1">NAME:</span>
         <input type="text" className="form-control" placeholder="Username" value={name} onChange={(val)=>{setName(val.target.value)}} />
         </label><br></br>
         <label className="style"><span className="center2">DEPARTMENT:</span>
         <input type="text" className="form-control" placeholder="Userdepartment" value={department} onChange={(val)=>{setDepartment(val.target.value)}} />
         </label><br></br>
         <label className="style"><span className="center3">RATING:</span>
         <input type="number" className="form-control" placeholder="Userrating" value={rating} onChange={(val)=>{setRating(val.target.value)}} />
         </label><br></br><br></br>
         <button className="btn btn-dark" onClick={Show}>Submit</button>
      </form>
      <hr></hr>
   </div>
   </center>
   <div className={another}>
   <div className="box">
   {
     want.map((a)=>
      <div className="smallbox">
      [name:{a.name},
      department:{a.department},
      rating:{a.rating}]
      </div>
     )
   }
   </div><br></br>
   <center><button className="btn btn-dark" onClick={Show}>Go Back</button></center>
   </div>
   </>
  )
   } 
export {Function}
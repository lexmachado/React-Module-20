

const Contact = () =>{ 
  
  const  formStyle ={
    marginTop:"10px",
    marginRight:"50px"

  }

  const buttonStyle={
    width:"100px",
    height:"50px",
    marginTop:"50px",
    marginRight:"50px"
  }
  
  
  return  (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
       contact
      </h3>
      <p>My email is lexmachado@gmail.com my phone number is 305-123-1234</p>
      <form >
        <label style={formStyle} className="form-title" > Name:{"   "}</label>
        <input></input><br/>
     
        <label style={formStyle} >Email</label>
        <input></input><br/>
        <label style={formStyle} >Message</label>
        <textarea style={formStyle}  ></textarea><br/>
        <button style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;

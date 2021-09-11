import React, {useState} from "react";
import "./navbar.css";

const Contact = () => {

    const [data,setData]=useState({
       
        phone:'',
        email:'',
        message:'',
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert("Your response submited")
    };
  return (
    <>
      <div className="my-4">
        <h1 className="cnt">Contact Us</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container contact_div">
              <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                  <form>
                    <form onSubmit={formSubmit}>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          value={data.email}
                          onChange={InputEvent}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                          name="phone"
                          value={data.phone}
                          onChange={InputEvent}
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                           Message/Feedback
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="message"
                          value={data.message}
                          onChange={InputEvent}
                        ></textarea>
                      </div>

                      <button type="submit" class="btn btn-outline-primary">
                        Submit
                      </button>
                    </form>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

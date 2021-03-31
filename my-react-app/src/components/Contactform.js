import React from 'react'

function Contactform() {
    return (
        <>
            <div className="col-md-6  shadow-lg p-5">
                <form>
                    <div className="col-12 mb-3">
                        <label htmlfor="username">Name</label>
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlfor="username">Email</label>
                        <input type="text" className="form-control" placeholder="Email"/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlfor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Contact"/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlfor="confirmpassword">Confirm password</label>
                        <input type="password" className="form-control" placeholder="your message...."/>
                    </div>
                    <div className="col-6 mt-2 offset-md-2">
                    <button className="btn btn-primary form-control">Send</button>
                    </div>

                </form>
            

            </div>

            
        </>
    )
}

export default Contactform

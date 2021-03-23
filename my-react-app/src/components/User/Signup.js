import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Signnup=()=> {
    return (
        <>
        <Navbar/>
        <div className ="container mt-5 mb-3">
            <div className="col-md-6 offset-md-3 shadow-lg p-5">
                <form>
                    <div className="col-12 mb-3">
                        <label htmlfor="username">Name</label>
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlfor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlfor="confrimpassword">Confrim password</label>
                        <input type="password" className="form-control" placeholder="confirm password"/>
                    </div>
                    <div className="col-6 mt-2 offset-md-2">
                    <button className="btn btn-primary form-control">Signup</button>
                    </div>

                </form>
            

            </div>

        </div>
        <Footer/>
            
        </>
    )
}

export default Signnup

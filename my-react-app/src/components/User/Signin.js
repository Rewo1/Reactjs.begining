import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Signin=()=> {
    return (
        <>
        <Navbar/>
        <div className ="container mt-5 mb-3">
            <div className="col-md-6 offset-md-3 shadow-lg p-5">
                <form>
                <div className="col-12 mb-3">
                        <label htmlfor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    

                    <div className="col-12 mb-3">
                        <label htmlfor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>



                    <div className="col-6 mt-2 offset-md-2">
                    <button className="btn btn-primary form-control">Signin</button>
                    </div>

                </form>

                

            </div>

        </div>
        <Footer/>
            
        </>
    )
}

export default Signin

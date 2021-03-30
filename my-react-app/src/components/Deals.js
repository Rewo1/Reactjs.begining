import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Deals = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row mt-3">
                    <h2>Deals and promotion</h2>
                    <span>shops today deals, Lightning Deals , and limited time discounts</span>
                    <div className="col-md-2 p-3 shadow" style={{backgroundColor:'#f5f5f5'}}>
                        <h4>Categories</h4>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    mobile
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    laptop
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    clothe
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    shoes
  </label>
                            </div>
                            <Link className="text-decoration-non btn btn-info">see more</Link>


                        </form>
                        <div className="mt-2">
                            <h4>Deal type</h4>
                            <Link to="#" className="text-decoration-none">deal of the day</Link> <br/>
                            <Link to="#" className="text-decoration-none">lightening Deals</Link> <br/>
                            <Link to="#" className="text-decoration-none">saving ans sales</Link> <br/>
                            <Link to="#" className="text-decoration-none">Weekend Deals</Link> <br/>



                        </div>

                    </div>


                </div>

            </div>
            <Footer />
        </>
    )
}

export default Deals

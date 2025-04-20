import React from "react";
import { carddata } from "../cardImages.js";
import "./Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from "./logo.jpeg";
import pic2 from "./logo1.jpeg";
import pic3 from "./bedroom.jpeg";



const Service = () => {
    return (
        <>
            <section>
                <div class="container" style={{ padding: "100px" }}>
                    <div id="Services" className="service-page">
                        <h2>Rooms</h2>
                        <hr class="my-4" />
                    </div>

                    <div class="row" >
                        <div class="col-lg-6">
                            <div class="card">
                                <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={pic1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={pic2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={pic3} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Double Executive Room</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card">

                                <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={pic1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={pic2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={pic3} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Family Suite Room</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn">Book Now</a>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section >
        {/* <div className="card_rack">
            {
                carddata.map((data)=>{
                    return(
                        <div className="cards"  key={data.id}>
                            <img className="card-img" src={data.img}/>
                            <span className="card-price">{data.price}</span>
                            <h2 style={{textAlign:"center"}}>{data.name}</h2>
                            <p style={{margin:"2%"}}>{data.content}</p>
                            <a className="Explore" href="#" >Explore</a>
                        </div>
                    );
                })
            }
        </div> */}
        </>

    );
}
export default Service;
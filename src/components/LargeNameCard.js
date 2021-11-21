import React from 'react';

export function LargeNameCard(props) {
    return (
        <main>
            <div className="section2">
                <div className="container"> 
                    <div className="large-card neut">
                        <div className="row justify-content-center">
                            <h1>{props.name.name}</h1>
                            <div className="container">
                                <div className="large-card">
                                    <div className="row justify-content-center">
                                        
                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Pronunciation</h2>
                                            <p>{props.name.pronunciation}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Gender</h2>
                                            {/* {how do I change the className?} */}
                                            <p><i className="fa fa-genderless" aria-label={props.name.gender}></i> {props.name.gender}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Meaning</h2>
                                            <p>{props.name.meaning}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Origin</h2>
                                            <p>{props.name.origin}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Length</h2>
                                            <p>{props.name.length}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>First Letter</h2>
                                            <p>{props.name.name[0]}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
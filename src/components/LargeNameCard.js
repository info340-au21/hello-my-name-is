import React from 'react';
import { useParams } from 'react-router';
import nameData from '../data/Names.json';
import _ from 'lodash';


export function LargeNameCard(props) {

    let nameID = useParams();
    let name =  _.find(nameData, {name: nameID});

    if(!name) {return <h2>No name specified.</h2>}

    // let expand = (event) => {
    //     event.preventDefault();
    // }


    return (
        <main>
            <div className="section2">
                <div className="container"> 
                    <div className="large-card neut">
                        <div className="row justify-content-center">
                            <h1>{props.props.name}</h1>
                            <div className="section2">
                                <div className="large-card">
                                    <div className="row justify-content-center">
                                        
                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Pronunciation</h2>
                                            <p>{props.props.pronunciation}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Gender</h2>
                                            {/* {how do I change the className?} */}
                                            <p><i className="fa fa-genderless" aria-label={props.props.gender}></i> {props.props.gender}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Meaning</h2>
                                            <p>{props.props.meaning}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Origin</h2>
                                            <p>{props.props.origin}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>Length</h2>
                                            <p>{props.props.name.length}</p>
                                        </div>

                                        <div className="card attribute col-sm-2 col-lg-3">
                                            <h2>First Letter</h2>
                                            <p>{props.props.name}</p>
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

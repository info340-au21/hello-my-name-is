import React from 'react';
import './index.css';
import { NameSearchFilter } from './components/NameSearchFilter/NameSearchFilter.js';

function App(props) {
    return (
        <main>
            <NameSearchFilter />

            {/* <!-- Name cards mini (data view 1) --> */}
            <div className="section container column">
                <h2 className="row">Your 50 matches:</h2>

                <div className="container card-container row">
                    <div className="card outer neut">
                        <h3 className="name">
                            <div className="card-container">
                                <div></div>
                                <div>
                                    Nalu
                                    <i className="fa fa-genderless" aria-label="neutral"></i>
                                </div>
                                <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                            </div>
                        </h3>

                        <div className="inner card">
                            <p className="meaning">Surging Surf, Wave</p>
                        </div>
                    </div>

                    <div className="outer card masc">
                        <h3 className="name">
                            <div className="card-container">
                                <div></div>
                                <div>
                                    Jacob
                                    <i className="fa fa-mars" aria-label="masculine"></i>
                                </div>
                                <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                            </div>
                        </h3>

                        <div className="inner card">
                            <p className="meaning">Supplanter, usurper</p>
                        </div>
                    </div>

                    <div className="outer card fem">
                        <h3 className="name">
                            <div className="card-container">
                                <div></div>
                                <div>
                                    Carolina
                                    <i className="fa fa-venus" aria-label="feminine"></i>
                                </div>
                                <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                            </div>
                        </h3>

                        <div className="inner card">
                            <p className="meaning">Song of happiness or joy</p>
                        </div>
                    </div>

                    <div className="outer card masc">
                        <h3 className="name">
                            <div className="card-container">
                                <div></div>
                                <div>
                                    Maynard
                                    <i className="fa fa-mars" aria-label="masculine"></i>
                                </div>
                                <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                            </div>
                        </h3>
                    
                        <div className="inner card">
                            <p className="meaning">Strength, brave, strong</p>
                        </div>
                    </div>

                    <div className="outer card masc">
                        <h3 className="name">
                            <div className="card-container">
                                <div></div>
                                <div>
                                    Kevin
                                    <i className="fa fa-mars" aria-label="masculine"></i>
                                </div>
                                <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                            </div>
                        </h3>
                    
                        <div className="inner card">
                            <p className="meaning">Handsome</p>
                        </div>
                    </div>

                    <div className="outer card masc">
                        <h3 className="name">
                            <div className="card-container">
                                <div></div>
                                <div>
                                    Andy
                                    <i className="fa fa-mars" aria-label="masculine"></i>
                                </div>
                                <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                            </div>
                        </h3>
                    
                        <div className="inner card">
                            <p className="meaning">Brave</p>
                        </div>
                    </div>

                    <div className="outer card load">
                        <h3 className="name">
                            Loading...

                        </h3>
                    
                    </div>

                    <div className="outer card load">
                        <h3 className="name">
                            Loading...

                        </h3>
                    
                    </div>

                </div>        
            </div>
    </main>
    );
}

export default App;
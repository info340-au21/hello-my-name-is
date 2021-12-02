import nameData from './../data/Names.json';

export function NameSearchResults(props) {
    return (
        <div className="section container column">
            <h2 className="row">Your 50 matches:</h2>
            <NameCards/>
        </div>
    )
}

function NameCards(props) {
    // get name results from filtered search
    // let nameResultObjArr = props.results;
    let nameResultObjArr = nameData;

    let naluTest = nameResultObjArr[0];
    console.log("test" + naluTest);
    console.log("test meaning" + naluTest.meaning);

    // for each name result object, create a name card
    let nameCardElemArr = nameResultObjArr.map((nameResultObj) => {
        return (
            <NameCard
                name={nameResultObj.name}
                gender={nameResultObj.gender}
                meaning={nameResultObj.meaning}
                isLiked={nameResultObj.liked}
                key={nameResultObj.name}
            />
        )
    });

    return (
        <div className="container card-container row">
            { nameCardElemArr }
        </div>
    )

    // return (
    //     <div className="container card-container row">
    //         {/* {resultElemArr} */}

    //         {/* Remove hard-code once data is added */}
    //         <div className="card outer neut">
    //             <h3 className="name">
    //                 <div className="card-container">
    //                     <div></div>
    //                     <div>
    //                         Nalu
    //                         <i className="fa fa-genderless" aria-label="neutral"></i>
    //                     </div>
    //                     <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
    //                 </div>
    //             </h3>

    //             <div className="inner card">
    //                 <p className="meaning">Surging Surf, Wave</p>
    //             </div>
    //         </div>

    //         <div className="outer card masc">
    //             <h3 className="name">
    //                 <div className="card-container">
    //                     <div></div>
    //                     <div>
    //                         Jacob
    //                         <i className="fa fa-mars" aria-label="masculine"></i>
    //                     </div>
    //                     <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
    //                 </div>
    //             </h3>

    //             <div className="inner card">
    //                 <p className="meaning">Supplanter, usurper</p>
    //             </div>
    //         </div>

    //         <div className="outer card fem">
    //             <h3 className="name">
    //                 <div className="card-container">
    //                     <div></div>
    //                     <div>
    //                         Carolina
    //                         <i className="fa fa-venus" aria-label="feminine"></i>
    //                     </div>
    //                     <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
    //                 </div>
    //             </h3>

    //             <div className="inner card">
    //                 <p className="meaning">Song of happiness or joy</p>
    //             </div>
    //         </div>

    //         <div className="outer card masc">
    //             <h3 className="name">
    //                 <div className="card-container">
    //                     <div></div>
    //                     <div>
    //                         Maynard
    //                         <i className="fa fa-mars" aria-label="masculine"></i>
    //                     </div>
    //                     <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
    //                 </div>
    //             </h3>
            
    //             <div className="inner card">
    //                 <p className="meaning">Strength, brave, strong</p>
    //             </div>
    //         </div>

    //         <div className="outer card masc">
    //             <h3 className="name">
    //                 <div className="card-container">
    //                     <div></div>
    //                     <div>
    //                         Kevin
    //                         <i className="fa fa-mars" aria-label="masculine"></i>
    //                     </div>
    //                     <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
    //                 </div>
    //             </h3>
            
    //             <div className="inner card">
    //                 <p className="meaning">Handsome</p>
    //             </div>
    //         </div>

    //         <div className="outer card masc">
    //             <h3 className="name">
    //                 <div className="card-container">
    //                     <div></div>
    //                     <div>
    //                         Andy
    //                         <i className="fa fa-mars" aria-label="masculine"></i>
    //                     </div>
    //                     <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
    //                 </div>
    //             </h3>
            
    //             <div className="inner card">
    //                 <p className="meaning">Brave</p>
    //             </div>
    //         </div>

    //         <div className="outer card load">
    //             <h3 className="name">
    //                 Loading...

    //             </h3>
            
    //         </div>

    //         <div className="outer card load">
    //             <h3 className="name">
    //                 Loading...

    //             </h3>
            
    //         </div>
    //     </div>  
    // )
}

function NameCard(props) {
    let nameStr = props.name;
    let genderStr = props.gender; // Need to implement (involves adding/removing gender class)
    let meaningStr = props.meaning;
    let isLiked = props.liked; // Need to implement (involves adding/removing gender class)

    return (
        // Hard-coded gender
        <div className="card outer neut">
            <h3 className="name">
                <div className="card-container">
                    <div></div>
                    <div>
                        {nameStr}
                        {/* Hard-coded gender */}
                        <i className="fa fa-genderless" aria-label="neutral"></i>
                    </div>
                    {/* Hard-coded liked state */}
                    <button type="button" className="btn btn-heart"><span className="material-icons" aria-label="sorting">favorite_border</span></button>
                </div>
            </h3>

            <div className="inner card">
                <p className="meaning">{meaningStr}</p>
            </div>
        </div>
    )
}
import React from 'react';

export function SubmitForm() {
    return (
        <main>
            <form>
                <div className="form-attribute">
                    <label for="name">What name would you like to submit to the data base? </label>
                    <input type = "text" placeholder="Enter a name" className="search" />
                </div>

                <div className="form-attribute">
                    <label for="origin">What is the origin of this name? </label>
                    <input type = "text" placeholder="eg. Greek, Somolian" className="search" />
                </div>

                <div className="form-attribute">
                    <label for="gender">Is it a gendered name? </label>
                    <label for="feminine"><input type = "radio" /> Feminine </label>
                    <label for="masculine"><input type = "radio" /> Masculine </label>
                    <label for="nuetral"><input type = "radio" /> Neutral </label>
                </div>

                <div className="form-attribute">
                    <label for="meaning">What is the meaning of this name? </label>
                    <input type = "text" placeholder="max 180 characters" />
                </div>

                <div className="item">
                    <button type="button" className="btn btn-light">Submit Name!</button>
                </div>
            </form>
        </main>
    )
}
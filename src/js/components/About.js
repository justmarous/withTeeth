import React from 'react';

function AboutMe(props) {
    return (
        <>
            <section className="motto">
                <h1>To attain knowledge, add things every day.<br/>
                    To attain wisdom, remove things every day.</h1>
                <p>Tao Te Ching, Ch. 48</p>
            </section>
            <section className="interests">
                <h1>In free time I love</h1>
                <div className="hobbys">
                    <div className="hobby1">
                        <p className="explanation">Gaming</p>
                    </div>

                    <div className="hobby2">
                        <p className="explanation">Practicing Tai Chi</p>
                    </div>
                    <div className="hobby3">
                        <p className="explanation">Working on side projects</p>
                    </div>
                    <div className="hobby4">
                        <p className="explanation">Doing music</p>
                    </div>
                </div>
            </section>



        </>
    );
}

export default AboutMe;

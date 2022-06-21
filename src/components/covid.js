import React, { useEffect, useState } from "react";
import './covid.css';
import CountUp from 'react-countup';

function Covid() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    };


    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <section>
                <h1>&#128308;LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                <div className="container">

                    <div className="card">
                        <p className="card_name"><span> OUR</span> COUNTRY</p>
                        <p className="card_total">INDIA</p>
                    </div>

                    <div className="card" style={{ background: 'lightgreen' }}>
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> TOTAL</span> RECOVERIES</p>
                                <p className="card_total count">{ 
                                    <CountUp
                                        start={0}
                                        end={data.recovered}
                                        duration={3}
                                        />  
                                  }</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ background: 'yellow' }}>
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> TOTAL</span> CONFIRMED</p>
                                <p className="card_total count">{ 
                                    <CountUp
                                    start={0}
                                    end={data.confirmed}
                                    duration={3}
                                    />    }</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ background: 'red' }}>
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> TOTAL</span> DEATHS</p>
                                <p className="card_total count">{ 
                                    <CountUp
                                    start={0}
                                    end={data.deaths}
                                    duration={3}
                                    />    }</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ background: 'orange' }}>
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> TOTAL</span> ACTIVE</p>
                                <p className="card_total count">{ 
                                    <CountUp
                                    start={0}
                                    end={data.active}
                                    duration={3}
                                    />    }</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ background: 'brown' }}>
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> LAST</span> UPDATED</p>
                                <p className="card_total datetime">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* <img src="/logo192.png"></img> */}
            </section>
        </>

    );

}

export default Covid
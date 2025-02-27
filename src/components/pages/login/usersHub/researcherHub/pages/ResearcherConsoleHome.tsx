import React, {Fragment} from 'react';
import './../../../../../../css/ConsoleHome.css';
import {useNavigate} from "react-router-dom";


function ResearcherConsoleHome() {

    const navigate = useNavigate();

    return (
        <Fragment>
            <div>
                <h1>Welcome to the Researcher Console</h1>
                <div  className={'bubbles-container'}>
                    <div style={{display:"flex", marginTop:32, marginBottom:32}}>
                        <div className={'page-bubble-wrapper page-bubble'} onClick={()=>navigate('./../master-schedule')}>
                            <div className={'icon-schedule'}/>
                            <label className={'page-bubble-label'}>Master Schedule</label>
                            <div className={'page-bubble-description'}>Todo.</div>
                        </div>
                        <div  className={'page-bubble-wrapper page-bubble'} onClick={()=>navigate('./../catalog')}>
                            <div className={'icon-catalog-courses'}/>
                            <label className={'page-bubble-label'}>Course Catalog</label>
                            <div className={'page-bubble-description'}>All basic information pertaining to courses,
                                departments, and programs.</div>
                        </div>
                        <div  className={'page-bubble-wrapper page-bubble'} onClick={()=>navigate('./../statistics')}>
                            <div className={'icon-stats'}/>
                            <label className={'page-bubble-label'}>View Statistics</label>
                            <div className={'page-bubble-description'}>"It's very statistical." - Dane Cook</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default ResearcherConsoleHome;

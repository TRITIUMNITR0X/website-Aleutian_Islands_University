import React, {Fragment, useEffect, useState} from 'react';
import HomeNavBanner from "../../../../HomeNavBanner";
import {useNavigate} from "react-router-dom";
import SideBanner from "../../../../SideBanner";
import {UserAuthStore} from "../../../../../stores/AuthUserStore";
import StudentHistoryComparator from "../../../../StudentHistoryComparator";

function Researcher() {

    const userStoreID = UserAuthStore((state:any) => state.userID);
    const [userID, setID] = useState(userStoreID);

    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <Fragment>
            <div className={'main-container'}>
                <HomeNavBanner urls={[]}
                               names={[]}/>
                <div className = {'main-body'}>
                    <SideBanner
                        urls={["./../account", "./../profile", "./", "/login"]}
                        names={["Account", "Profile", "Researcher", "Logout"]}
                        classes={['item', 'item', 'item', 'item-last']}
                        roles={['inactive', 'inactive', 'active', 'inactive']} />
                    <div className={'inner-body'}>
                        <div className={'inner-body-constraints'}>
                            <p>This is an Researcher page</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Researcher;
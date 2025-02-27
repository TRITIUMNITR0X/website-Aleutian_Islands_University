import React, {Fragment} from 'react';
import HomeNavBanner from "../../shared/HomeNavBanner";

function ErrorPage() {

    return (
        <Fragment>
            <div className={'main-container'}>
                <HomeNavBanner urls={["/", "/academics", "/about"]}
                               names={["Home", "Academics", "About"]}/>
                <div className={'main'}>
                    <div className={'main-header'}>

                    </div>
                    <div className={'main-body'}>
                        <div className={'inner-body'}>
                            <div className={'inner-body-constraints'}>
                                <div>
                                    <h3>Error 404: Page not found.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default ErrorPage;
import React, {Fragment, useEffect, useState} from 'react';
import LoginForm from "../../LoginForm";
import HomeNavBanner from "../../HomeNavBanner";
import {AuthRole, RoleAuthStore, UserAuthStore} from "../../../stores/AuthUserStore";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import PasswordResetForm from "../../PasswordResetForm";

function Login() {

    window.sessionStorage.removeItem("lastPage");
    const setUserDefault = UserAuthStore((state:any) => state.setDefaults);
    const setRoleDefault = RoleAuthStore((state:any) => state.setDefaultRole);

    enum Pages {
        Login,
        Reset
    }
    const [page, setPage] = useState(Pages.Login);

    useEffect(() => {
        setUserDefault();
        setRoleDefault();
    }, [])

    function handlePageChange(newPage:number) {
        setPage(newPage);
    }

    function displayPasswordResetForm() {
        return (
            <Fragment>
                <div className = "div-login">
                    <div className={'login-container'}>
                        <div className={'login-body'}>
                            <PasswordResetForm handlePageChange={()=>handlePageChange(Pages.Login)}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    function displayLoginForm() {
        return (
            <Fragment>
                <div className = "div-login">
                    <div className={'login-container'}>
                        <div className={'login-body'}>
                            <LoginForm/>
                            <div className={'submit'} style={{display:"inline-block", width:"100%", marginRight:"auto", marginLeft:"auto"}}>
                                <div style={{fontSize:13, marginTop:32, float:"right"}}>
                                    <label className={'clickable-text'}
                                           onClick={() => handlePageChange(Pages.Reset)}>
                                        Can't sign in?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    function displayPage() {
        switch (page) {
            case Pages.Login: {
                return displayLoginForm();
            }
            case Pages.Reset: {
                return displayPasswordResetForm();
            }
        }
    }


    return (
        <Fragment>
            <div className={'main-container'}>
                <HomeNavBanner urls={["/", "/academics", "/about", "/login"]}
                               names={["Home", "Academics", "About", "Login"]}/>
                <div className={'main'}>
                    <div className={'main-header'}>
                    </div>
                    <div className={'main-body'}>
                        <div className={'inner-body'}>
                            <div className={'inner-body-constraints'}>
                                {displayPage()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
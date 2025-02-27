import React, {Fragment, useState} from 'react';
import '../../css/LoginForm.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthRole, RoleAuthStore, UserAuthStore} from "../../stores/AuthUserStore";

function LoginForm() {

    const userStoreID = UserAuthStore((state:any) => state.userID);
    const roleStoreID = RoleAuthStore((state:any) => state.authRole);
    const setUserStoreID = UserAuthStore((state:any) => state.setUserID);
    const invalidateRole = RoleAuthStore((state:any) => state.invalidateRole);

    const [userID, setUserID] = useState('0');
    const [userRole, setUserRole] = useState('0');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [failedAttemptCount, setFailedAttempts] = useState(0);

    const navigate = useNavigate();

    const handleEmailChange = (event:any) => {
        event.preventDefault();
        setUserID('0');
        setEmail(event.target.value);
    };

    const handlePassChange = (event:any) => {
        event.preventDefault();
        setUserID('0');
        setPass(event.target.value);
    }

    function handleSubmit(event:any) {

        axios.get(process.env['REACT_APP_API_AUTH'] as string, {
            params: {
                func: "auth",
                email,
                pass
            }
        }).then(res => {
            let {uid, role, priority} = res.data;
            console.log("login", uid, role, priority)

            setUserID(uid);
            console.log("Response:",uid);

            if(uid <= '0') {
                setUserRole(AuthRole.Visitor);
                setFailedAttempts(failedAttemptCount +1);
            } else {
                setUserRole(role);

                setUserStoreID(uid);
                invalidateRole((parseInt(role)+parseInt(priority))+"");

                navigate("/u");
            }
        }).catch(function(err) {
            console.log(err.message);
        })

        event.preventDefault();
    }

    function renderError() {
        var errMsg = "";

        if(userID === '-1'){

            if(failedAttemptCount >= 3) {
                errMsg = "Too many failed attempts. Please try again later."
            }
            else if((email.length == 0 || pass.length == 0)) {
                errMsg = "Please fill out the credentials.";
            } else {
                errMsg = "Invalid email and password combination.";
            }
        }

        return errMsg;
    }

    return (
        <Fragment>
            <form onSubmit={event => handleSubmit(event)}>
                <fieldset disabled={failedAttemptCount >= 5}>
                    <div style={{marginBottom:8}}>
                        <label className={'authError'}>
                            { renderError() }
                        </label>
                    </div>
                    <div className={'div-login-row'}>
                        <div className={'div-login-col'}>
                            <div className={'div-login-label'}>Email: </div>
                        </div>
                        <div className={'div-login-col'}><input className={'inputText'}
                                   type={"email"}
                                   autoComplete={'on'}
                                   value={email}
                                   onChange={handleEmailChange}/>
                        </div>
                    </div>
                    <div className={'div-login-row'}>
                        <div className={'div-login-col'}><div className={'div-login-label'}>Password: </div></div>
                        <div className={'div-login-col'}>
                            <input className={'inputText'}
                                   type={"password"}
                                   autoComplete={'on'}
                                   value={pass}
                                   onChange={handlePassChange}/>
                        </div>
                    </div>
                    <div style={{marginRight:"auto", marginLeft:"auto"}}>
                        <input type={"submit"} value={"Login"}/>
                    </div>
                </fieldset>
            </form>
        </Fragment>
    );
}

export default LoginForm;

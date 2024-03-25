import {selectLoginInfo, setRegInfo} from "../reducers/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "@mui/material";
import {useEffect, useRef, useState} from "react";

export default function Sysnotif(){
    const loginInfo = useSelector(selectLoginInfo);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");
    const isFirstRender = useRef(0);
    const prevDepsRef = useRef(loginInfo);
    const dispatch = useDispatch();

      useEffect(() => {
        const currentDeps = loginInfo;
        const changes = {};
        for (const key of Object.keys(currentDeps)) {
            if (currentDeps[key] !== prevDepsRef.current[key]) {
                changes[key] = true;
            }
        }

        prevDepsRef.current = currentDeps;
        debugger
        if(changes.status == true) {
            if (loginInfo.status == true) {
                setMsg("Logged in successfully")
            } else {
                setMsg("Logged out successfully")
            }
        }
        else if(changes.reg == true) {
            setMsg("Registered successfully")
            dispatch(setRegInfo(false));
        }

        if (isFirstRender.current < 2) {
            isFirstRender.current = isFirstRender.current + 1;
        } else {
            debugger;
            setShow(true);
            const timer = setTimeout(() => setShow(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [loginInfo]);

    useEffect(() => {

    }, [msg]);

    return(
        <>
        {
            show && <Alert variant="filled" severity="success">{msg}</Alert>
        }
        </>
    )
}
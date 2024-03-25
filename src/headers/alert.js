import {selectLoginInfo} from "../reducers/loginSlice";
import {useSelector} from "react-redux";
import {Alert} from "@mui/material";
import {useEffect, useRef, useState} from "react";

export default function Sysnotif(){
    const loginInfo = useSelector(selectLoginInfo);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");
    const isFirstRender = useRef(0);
    const prevDepsRef = useRef({ loginInfo });

      useEffect(() => {
        const currentDeps = { loginInfo };

        const changes = {};
        for (const key of Object.keys(currentDeps)) {
          if (currentDeps[key] !== prevDepsRef.current[key]) {
            changes[key] = {
              from: prevDepsRef.current[key],
              to: currentDeps[key],
            };
          }
          else {
              changes[key] = {}
          }
        }
        debugger

        if(Object.keys(changes.loginInfo).length > 0){
            if(changes.loginInfo.to.status == true) {
                debugger
                setMsg("Logged in successfully")
            }
            else{
                debugger
                setMsg("Logged out successfully")
            }
        }

        debugger

        if (isFirstRender.current < 2) {
            isFirstRender.current = isFirstRender.current + 1;
        } else {
            setShow(true);
            const timer = setTimeout(() => setShow(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [loginInfo]);

    return(
        <>
        {
            show && <Alert variant="filled" severity="success">{msg}</Alert>
        }
        </>
    )
}
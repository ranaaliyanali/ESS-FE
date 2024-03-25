import {selectLoginInfo} from "./loginSlice";
import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

export default function Alert(){
    const loginInfo = useSelector(selectLoginInfo);
    const [show, setShow] = useState(false);
    const isFirstRender = useRef(true);

    // useEffect(() => {
    //     if(!isFirstRender.current){
    //         setShow(true);
    //     }
    // }, [loginInfo]);

    return(
        <>
        {
            <Alert variant="filled" severity="success">This is a success Alert.</Alert>
        }
        </>
    )
}
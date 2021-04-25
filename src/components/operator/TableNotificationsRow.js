import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {read} from "../../api/operator";


function TableNotificationsRow(props) {
    const language = useSelector(state => state.language);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const handleRead = ()=>{
        dispatch(read(user.token, props.notification.id));
    };

    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.notification.phone}</td>
            <div>
                <div dangerouslySetInnerHTML={{ __html: props.notification.message}} /></div>
            <td>
                <Button size="sm" variant="success" className="btn-block" onClick={handleRead}>{local(language.language,'sent')}</Button>
            </td>
        </tr>
    );
}
export default TableNotificationsRow;
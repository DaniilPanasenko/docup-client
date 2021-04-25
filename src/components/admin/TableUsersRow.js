import React, {useEffect} from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {blockUser} from "../../api/admin";


function TableUsersRow(props) {
    const language = useSelector(state => state.language);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const getColor=(role)=>{
        if(role==='admin')return 'danger';
        if(role==='clinic')return 'warning';
        if(role==='doctor')return 'info';
        if(role==='patient')return 'success';
        if(role==='operator')return 'light';
    };

    const handleBlock = ()=>{
        dispatch(blockUser(user.token, props.user.id));
    }

    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.user.login}</td>
            <td>{props.user.email}</td>
            <td><Badge variant={getColor(props.user.role)}>{local(language.language,props.user.role)}</Badge></td>
            <td>{
                props.user.isBlocked?
                    <Button size="sm" variant="danger" className="btn-block" onClick={handleBlock}>{local(language.language,'blocked')}</Button>:
                    <Button size="sm" variant="success" className="btn-block" onClick={handleBlock}>{local(language.language,'active')}</Button>
            }</td>
        </tr>
    );
}
export default TableUsersRow;
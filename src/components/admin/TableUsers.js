import React, {useEffect} from "react";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from "react-redux";
import {users} from "../../api/admin";
import TableUsersRow from "./TableUsersRow";
import {local} from "../../localization/locales";

function TableUsers(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const list = useSelector(state=>state.list);
    const dispatch  = useDispatch();

    useEffect(()=> {
        dispatch(users(user.token));
    },[]);

    return (
        <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
            <tr>
                <th>#</th>
                <th>{local(language.language,'login')}</th>
                <th>{local(language.language,'email')}</th>
                <th>{local(language.language,'account_type')}</th>
                <th>{local(language.language,'status')}</th>
            </tr>
            </thead>
            <tbody>
                {
                    list.users!=null?
                        list.users.map((item, index) =>
                            <TableUsersRow
                                key={index+1}
                                user={item}
                                index={index+1}/>)
                        :null
                }
            </tbody>
        </Table>
    );
}
export default TableUsers;
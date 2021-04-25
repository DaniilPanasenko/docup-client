import React, {useEffect} from "react";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {doctors} from "../../api/clinic";

function TableDoctors(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const clinic = useSelector(state=>state.clinic);
    const dispatch  = useDispatch();

    useEffect(()=> {
        dispatch(doctors(user.token));
    },[]);

    return (
        <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
            <tr>
                <th>#</th>
                <th>{local(language.language,'login')}</th>
                <th>{local(language.language,'email')}</th>
            </tr>
            </thead>
            <tbody>
            {
                clinic.doctors!=null?
                    clinic.doctors.map((item, index) =>
                        (<tr>
                            <td>{index+1}</td>
                            <td>{item.login}</td>
                            <td>{item.email}</td>
                        </tr>))
                    :null
            }
            </tbody>
        </Table>
    );
}
export default TableDoctors;
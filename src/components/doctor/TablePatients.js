import React, {useEffect} from "react";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {patients} from "../../api/doctor";

function TablePatients(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const doctor = useSelector(state=>state.doctor);
    const dispatch  = useDispatch();

    useEffect(()=> {
        dispatch(patients(user.token));
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
                doctor.patients!=null?
                    doctor.patients.map((item, index) =>
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
export default TablePatients;
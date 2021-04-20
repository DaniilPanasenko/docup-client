import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {Gb, Ua} from 'react-flags-select';


function LanguageSelector(props) {
    return (
        <Dropdown className="mr-sm-2">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Ua/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <Gb/> English
                </Dropdown.Item>
                <Dropdown.Item>
                    <Ua/> Українська
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default LanguageSelector;
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {Gb, Ua} from 'react-flags-select';
import {setLanguage} from "../../../actions/language";
import {useDispatch, useSelector} from "react-redux";


function LanguageSelector(props) {
    const language = useSelector(state => state.language);
    const dispatch  = useDispatch();

    const handleSelectorUa=()=>{
        dispatch(setLanguage('ua'));
    };

    const handleSelectorEn=()=>{
        dispatch(setLanguage('en'));
    };

    const getActive=(e)=>{
        return language.language===e;
    };

    return (
        <Dropdown className="mr-sm-2">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {language.language==='en'?<Gb/>:null}
                {language.language==='ua'?<Ua/>:null}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="en" active = {getActive('en')} onClick={handleSelectorEn}>
                    <Gb/> English
                </Dropdown.Item>
                <Dropdown.Item eventKey="ua" active = {getActive('ua')} onClick={handleSelectorUa}>
                    <Ua/> Українська
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default LanguageSelector;
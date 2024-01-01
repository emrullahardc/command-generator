import {Button, Label, TextInput} from "flowbite-react";
import React, {useEffect, useState} from "react";

const Form = ({command}) => {
    const regex = /\{([^}]+)\}/g;
    const matches = command?.command?.match(regex);
    const [inputValues, setInputValues] = useState({});
    const [output, setOutput] = useState('');

    useEffect(() => {
        generateOutput()
    }, [inputValues])


    const handleInputChange = (key, value) => {
        setInputValues((prevValues) => {
            if (!value && prevValues.hasOwnProperty(key)) {
                const {[key]: deletedKey, ...newValues} = prevValues;
                return newValues;
            }

            return {
                ...prevValues,
                [key]: value,
            };
        });
    };


    const generateOutput = () => {
        let outputCommand = command?.command;

        matches?.forEach((match) => {
            const key = match.replace(/[{}]/g, '');
            const value = inputValues[key] || '';

            outputCommand = outputCommand.replace(match, value);
        });

        setOutput(outputCommand);
    };


    return (
        <div className="w-2/4 mx-auto">
            <div className="mt-2">
                <h5>{command?.command ? 'Command Template' : 'Welcome. Please select a command from left menu'}</h5>
                {command?.command}
            </div>
            {matches?.map((match, index) => {
                const key = match.replace(/[{}]/g, '');
                const placeholder = match.replace(/[{}]/g, '');

                return (
                    <div className="mt-2" key={key}>
                        <div className={"mb-2 block"}>
                            <Label htmlFor={key} value={placeholder}></Label>
                        </div>
                        <TextInput id={key} type="text" placeholder={placeholder}
                                   onChange={(e) => handleInputChange(key, e.target.value)}
                        />
                    </div>
                );
            })}
            <div className="mt-2">
                {Object.keys(inputValues).length ? <div><h5>Generated Command:</h5>  <p>{output}</p></div> : null}
            </div>
        </div>
    );
}


export default Form;
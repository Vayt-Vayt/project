import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
    const [ localState, setLocalState ] = useState({
        editModes: false,
        status:props.status
    })
    

useEffect(() => {
    console.log('update');
    setLocalState({status: props.status})
}, [props.status])

    const activateAditMode = () => {
        setLocalState({editModes: true})

    }

    const deactivateAditMode = () => {
        setLocalState({editModes: false})
        props.updateStatus(localState.status)
    }

    const onStatusChange = (e) => {
        setLocalState({status: e.currentTarget.value})
    }

    return (
        <div>
            { !localState.editModes &&
                <div>
                    <span onDoubleClick={ activateAditMode }>
                        {props.status || 'Add status'} 
                    </span>
                </div>
            }
            { localState.editModes && 
            <div>
                <input autoFocus
                        value={localState.status} 
                        onBlur={deactivateAditMode} 
                        onChange={ onStatusChange }
                />
            </div>
            }
        </div>
    );
};

export default ProfileStatus;
import React from "react"
import styless from './FormsControls.module.css'

const FormControl = ({meta, children, ...props}) => {
    const errors = meta.error && meta.touched
    return (
        <div className={styless.formControl + ' ' + (errors ? styless.error : '')} >
            <div>
                {children}
            </div> 
            {errors && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const {meta, input, ...restprops} = props
    return <FormControl meta={meta} {...restprops}><textarea {...input} {...restprops}/></FormControl>
} 

export const Input = (props) => {
    const {meta, input, ...restprops} = props
    return <FormControl meta={meta} {...restprops}><input {...input} {...restprops}/></FormControl>
};

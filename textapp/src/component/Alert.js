import React from 'react'

function Alert(props) {
    const captilize=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
        <div>
            {props.alert && (
                <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                    <strong>{captilize(props.alert.typ)}</strong> :{props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
        </div>
    );
}

export default Alert



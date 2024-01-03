import React, { useState } from 'react'

export default function About(props) {
    // const [colore, setColore] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const [text, setText] = useState('Convert into Dark Mode')

    // let changeDark = () => {
    //     if (colore.color === 'white') {
    //         setColore({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setText('Convert into White Mode')
    //     } else {
    //         setColore({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         });
    //         setText('Convert into black Mode')
    //     }
    // };

    let colore={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white'
    }


    return (
        <div className="container" style={colore}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={colore}>
                            <strong>Open your new Bussiness</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={colore}>
                            This is the first item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={colore}>
                            <strong>Now Start new venture</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={colore}>
                            This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={colore}>
                            <strong>Excute Your plan</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={colore}>
                            This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

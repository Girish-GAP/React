import ReactDOM from 'react-dom';

function Modal({show}){
    return(
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">
                <div style={{margin : "15px 5px", color : 'white', borderWidth : '2px', borderColor : 'black', width : 'max-content', backgroundColor : 'red'}}>
                    <button onClick={show}>Close</button>
                </div>

                <div>
                    I'm a modal
                </div>
            </div>
        </div>

        // document.querySelector('.modal-container')
    )
}


export default Modal;
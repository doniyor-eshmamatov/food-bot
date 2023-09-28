import React from 'react'

export default function ConfirmModal({ onSuccess, onCancel, isOpen }) {
    return (
        isOpen ? <>
            <div className='confirm-modal'>
                <div className='confirm-modal-icon'>
                    <svg fill="#EA80FC" width="50px" height="50px" viewBox="0 0 1920.00 1920.00" xmlns="http://www.w3.org/2000/svg" stroke="#EA80FC"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="38.4"></g><g id="SVGRepo_iconCarrier"> <path d="M933.974 1477.394c-122.027 0-221.303 99.276-221.303 221.303S811.947 1920 933.974 1920s221.303-99.276 221.303-221.303-99.276-221.303-221.303-221.303zM1227.948 0H640l143.188 1298.171h301.572z" fillRule="evenodd"></path> </g></svg>
                </div>
                <p className='confirm-modal-title'>
                    Mahsulot Savatingizdan o'chib ketadi
                </p>
                <div className='confirm-modal-action'>
                    <button onClick={() => onCancel?.()}>Bekor qilish</button>
                    <button onClick={() => onSuccess?.()}>O'chirish</button>
                </div>
            </div>
            <div className='confirm-modal-overlay'></div>
        </> : <></>
    )
}

import React, { useState } from 'react'

export default function DetailSkeleton() {
    const cardStyles = { width: '100%', height: 250, margin: 0, marginRight: 10, borderRadius: 12, marginTop: 20 }
    const titleStyles = { width: '100%', height: 25, margin: 0, marginRight: 10, borderRadius: 12, marginTop: 20 }

    return (
        <div>
            <div className="line-2 detail-line-2" style={cardStyles}></div>
            <div className="line-2 detail-line-2" style={{...titleStyles, width: '90%'}}></div>
            <div className="line-2 detail-line-2" style={{...titleStyles, width: '75%'}}></div>
            <div className="line-2 detail-line-2" style={{...titleStyles, width: '75%'}}></div>
            <div className="line-2 detail-line-2" style={{...titleStyles, width: '20%'}}></div>
        </div>
    )
}

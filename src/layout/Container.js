import React from 'react'

export const Container = ({ children }) => {
    return (
        <div >
            <div className="flex min-h-screen max-w-5xl mx-auto border">
                {children}
            </div>
        </div>
    )
}

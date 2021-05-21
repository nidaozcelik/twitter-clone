import React from 'react'

export const Container = ({ children }) => {
    return (
        <div >
            <div className="flex min-h-screen max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    )
}

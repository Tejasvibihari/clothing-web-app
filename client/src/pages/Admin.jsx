import React from 'react'
import Dashboard from '../components/admin/Dashboard'
import BasicBreadcrumbs from '../components/Breadcrumbs'

export default function Admin() {
    return (
        <>
            <BasicBreadcrumbs
                first="Home"
                last='Admin'
            />
            <Dashboard />
        </>
    )
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({ first, second, third, fourth, last, secondL, thirdL, fourthL }) {
    return (
        <div className="mt-20 py-10  max-w-7xl mx-auto">
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        {first}
                    </Link>
                    {/* <Link
                        underline="hover"
                        color="inherit"
                        href={secondL}
                    >
                        {second}
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href={thirdL}
                    >
                        {third}
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href={fourthL}
                    >
                        {fourth}
                    </Link> */}
                    <Typography color="text.primary">{last}</Typography>
                </Breadcrumbs>
            </div>
        </div>
    );
}

BasicBreadcrumbs.propTypes = {
    first: PropTypes.string,
    second: PropTypes.string,
    third: PropTypes.string,
    fourth: PropTypes.string,
    last: PropTypes.string,
    secondL: PropTypes.string,
    thirdL: PropTypes.string,
    fourthL: PropTypes.string,
};
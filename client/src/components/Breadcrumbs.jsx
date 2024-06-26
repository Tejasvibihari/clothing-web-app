// import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({ first, second, third, fourth, last, secondL, thirdL, fourthL }) {
    return (
        <div className="bg-gray-300">
            <div className="mt-20 py-10  max-w-7xl mx-auto">
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        {first && <Link underline="hover" color="inherit" to="/" className="cursor-pointer">{first}</Link>}
                        {second && <Link underline="hover" color="inherit" href={secondL}>{second}</Link>}
                        {third && <Link underline="hover" color="inherit" href={thirdL}>{third}</Link>}
                        {fourth && <Link underline="hover" color="inherit" href={fourthL}>{fourth}</Link>}
                        <Typography color="text.primary">{last}</Typography>
                    </Breadcrumbs>
                </div>
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
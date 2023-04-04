import React from 'react';

import PropTypes from 'prop-types';
import { ThreeDots } from "react-loader-spinner";

export const Loader = ({loading}) => {
    return (
        <div>
            <ThreeDots
                width="180"
                radius="9"
                color="#331796"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                    justifyContent: 'center',
                    margin: '15px 0',
                }}

                visible={loading}
            />
        </div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
}
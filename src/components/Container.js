import React from 'react';
import PropTypes from 'prop-types';
import * as containerStyles from './container.module.less';

function Container({ children }) {
    return <div className={containerStyles.content}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;

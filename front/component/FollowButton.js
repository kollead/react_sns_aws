import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const FollowButton = ({post}) => <Button>Follow</Button>;

FollowButton.propTypes = {
  post: PropTypes.shape,
};

export default FollowButton;

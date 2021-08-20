import React from 'react';
import {useDispatch} from 'react-redux';
// import axios from 'axios';
// import useSWR, {mutate} from 'swr';
import {List, Button, Card} from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';

function FollowList({header, followData, mutate, onClickMore, loading}) {
  const dispatch = useDispatch();
  const onCancel = (id) => () => {
    if (header === 'Following') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
      mutate((prev) => prev.filter((d) => d.id !== id));
    } else {
      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      });
      mutate((prev) => prev.filter((d) => d.id !== id));
    }
  };

  return (
    <List
      style={{marginBottom: 20}}
      grid={{gutter: 4, xs: 2, md: 3}}
      size="small"
      header={<div>{header}</div>}
      loadMore={(
        <div style={{textAlign: 'center', margin: '10px 0'}}>
          <Button onClick={onClickMore} loading={loading}>Load More</Button>
        </div>
      )}
      bordered
      dataSource={followData}
      renderItem={(item) => (
        <List.Item style={{marginTop: 20}}>
          <Card actions={[
            <StopOutlined key="stop" onClick={onCancel(item.id)} />]}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  followData: PropTypes.array.isRequired,
  onClickMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mutate: PropTypes.any.isRequired,
};

export default FollowList;

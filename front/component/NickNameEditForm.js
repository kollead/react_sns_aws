import React, {useMemo} from 'react';
import {Form, Input} from 'antd';
import PropTypes from 'prop-types';

function NickNameEditForm({header, data}) {
  const style = useMemo(() => ({
    marginBottom: '20px', border: '1px solid #d9d9d9', padding: '10px',
  }), []);

  return (
    <Form style={style}>
      <Input.Search addonBefore="nickName" enterButton="Modify" />
    </Form>
  );
}

NickNameEditForm.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default NickNameEditForm;

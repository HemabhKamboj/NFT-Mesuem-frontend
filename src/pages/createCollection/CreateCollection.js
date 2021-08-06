import React, { useState, fragment } from 'react';
// import { Button } from 'antd-mobile';
import { Form, Button, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import _ from 'lodash'
const { TextArea } = Input;
function CreateCollection(props) {
  const [name, setName] = useState(''),
    [description, setDescription] = useState(''),
    [loading, setLoading] = useState(false),
    [nfts, setNfts] = useState([]),
    [formVals, setFormVals] = useState({});

  const verificationid = '';
  function handleAddNft(nft) {
    setNfts([...nfts, nft]);
  }

  function handleConfirm() {
    const payload = {
      'name':formval.name,
      'description':formval.description,
      'nfts':nfts
    };
    fetch(`/collection/create`)
    alert('Saved');
  }

  function verifyNFT(key) {
    console.log('verifying', key);
    const uri = formVals.nfts[key].tokenid;
    const splitUri = uri.split('/');
    const contractAddress = splitUri[4];
    const tokenId = splitUri[5];
    fetch(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}`)
      .then(response => response.json())
      .then(data => {
        setNfts(nfts => [...nfts, data]);
      });
  }

  function isCreateGroupButtonDisabled() {
    return (
      !name.trim()
    );
  }

  function onChange(values, allValues) {
    setFormVals(allValues);
    console.log(values);
  }

  return (
    <div style={{ height: 'calc(100vh - 46px)' }}>
      <h4 className='text-3xl'>Create a Collection</h4>
      <div className='text-sm'>Add NFTS in your collection</div>
      <Form
        // {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleConfirm}
        onValuesChange={onChange}
        onFinishFailed={handleConfirm}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please name your collection!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <TextArea />
        </Form.Item>
        <Form.List name="nfts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => {
                if (!nfts[key]) {
                  return (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item

                        {...restField}
                        name={[name, 'tokenid']}
                        fieldKey={[fieldKey, 'tokenid']}
                        rules={[{ required: true, message: 'Missing token ID' }]}
                      >
                        <Input placeholder="NFT Token ID" />
                      </Form.Item>
                      <Button onClick={() => verifyNFT(key)}>Verify</Button>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  )
                }
                else return (
                  <img src={nfts[key].image_url} />)
              })}
              <Form.Item>
                <Button type="dashed" onClick={() => { add(); verifyNFT(); }} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateCollection;

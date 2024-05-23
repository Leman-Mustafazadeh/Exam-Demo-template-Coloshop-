import React, { useContext } from "react";
import { BasketContext } from "../../context/ContextShops";
import { Space, Table, Tag } from "antd";
import { deleteOne } from "../../API";
const BasketPage = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const handleDelete = (id) => {
    deleteOne(id);
    const del = basket.filter((x) => x._id !== id);
    setBasket(del);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Decrease",
      dataIndex: "decrease",
      key: "decrease",
    },

    {
      title: "Delete",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>handleDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={basket} />;
};

export default BasketPage;

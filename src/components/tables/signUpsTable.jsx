import React, { Component } from "react";
import { Table } from "antd";

import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { MenuOutlined } from "@ant-design/icons";
import arrayMove from "array-move";
const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "pointer", color: "#999" }} />
));

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    className: "drag-visible",
  },
  {
    title: "Username",
    dataIndex: "username",
    className: "drag-visible",
  },
  {
    title: "Profit",
    dataIndex: "profit",
  },

  {
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
];

const data = [
  {
    key: "1",
    id: "1002",
    username: "Simona",
    profit: 32,
    index: 0,
  },
  {
    key: "2",
    id: "1003",
    username: "Ariel",
    profit: 42,
    index: 1,
  },
  {
    key: "3",
    id: "1004",
    username: "Anne",
    profit: 22,
    index: 2,
  },
  {
    key: "4",
    id: "1005",
    username: "Mark",
    profit: 67,
    index: 3,
  },
  {
    key: "5",
    id: "1006",
    username: "John",
    profit: 19,
    index: 4,
  },
];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);
const DragableBodyRow = ({ index, className, style, ...restProps }) => (
  <SortableItem index={restProps["data-row-key"]} {...restProps} />
);

class SignUpsTable extends Component {
  state = {
    dataSource: data,
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      console.log("Sorted items: ", newData);
      this.setState({ dataSource: newData });
    }
  };

  render() {
    const { dataSource } = this.state;
    const DraggableContainer = (props) => (
      <SortableContainer
        useDragHandle
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    );
    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        title={() => "Sign Ups"}
        bordered
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DragableBodyRow,
          },
        }}
      />
    );
  }
}

export default SignUpsTable;

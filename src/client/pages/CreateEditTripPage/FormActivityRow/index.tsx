import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { ActivityTypeList } from "../../../types/activity/enums";
import "./styles.css";

function FormActivityRow({
  remove,
  index,
}: {
  index: number;
  remove: (index: number | number[]) => void;
}) {
  return (
    <div key={index}>
      <div className="activityContainer">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ flex: 1 }}>
          <Col span={12}>
            <Form.Item
              name={[index, "name"]}
              label="Activity Name"
              rules={[
                { required: true, message: "Please enter an activity name!" },
              ]}
            >
              <Input placeholder="Activity name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name={[index, "type"]}
              label="Activity type"
              rules={[
                { required: true, message: "Please choose activity type!" },
              ]}
            >
              <Select
                id="type"
                placeholder="Activity type"
                options={Object.values(ActivityTypeList).map((activity) => ({
                  value: activity,
                  label: activity,
                }))}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Activity Description"
              name={[index, "description"]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col>
            <Button
              onClick={() => remove(index)}
              type="default"
              icon={<DeleteOutlined />}
            >
              Delete activity
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FormActivityRow;

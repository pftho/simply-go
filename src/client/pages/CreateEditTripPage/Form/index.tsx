import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Image,
  Input,
  Select,
  Spin,
  Typography,
} from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../context/auth.context";
import { useTripQuery } from "../../../services/trips/actions";
import { HolidayTimeframeEnum } from "../../../types/trip/enums";
import FormActivityRow from "../FormItineraryRow";
import "./styles.css";
import { useTripForm } from "./useTripForm";
import { TripCreationUpdateRequest } from "../../../types/trip/types";

const CreateEditTripForm = ({ edit }: { edit: boolean }) => {
  const { Option } = Select;
  const { Title } = Typography;

  const { id } = useParams();
  const { data: trip } = useTripQuery(id, { enabled: edit });
  const { user } = useAuth();
  const [storedImageUrl, setStoredImageUrl] = useState("");

  if (!user) {
    return <Spin />;
  }

  const { onFinish } = useTripForm();

  const handleFormFinish = (values: TripCreationUpdateRequest) => {
    onFinish(values, edit, user, storedImageUrl, trip);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoredImageUrl(e.target.value);
  };

  return (
    <Form
      className="createTripForm"
      onFinish={(values) => handleFormFinish(values)}
      initialValues={
        edit
          ? {
              ...trip,
            }
          : undefined
      }
      layout="vertical"
    >
      <Title level={5}>My Trip</Title>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter the trip name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Image URL">
        <Input
          placeholder="Enter the image URL"
          value={storedImageUrl}
          onChange={handleImageUrlChange}
          allowClear
        />
      </Form.Item>
      {storedImageUrl && (
        <Form.Item label="Image Preview">
          <Image src={storedImageUrl} alt="Preview" width={200} />
        </Form.Item>
      )}

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Recommended Budget in euros"
        name="recommendedBudget"
        rules={[
          { required: true, message: "Please enter the recommended budget!" },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Holiday Timeframe"
        name="holidayTimeframe"
        rules={[
          { required: true, message: "Please select the holiday timeframe!" },
        ]}
      >
        <Select>
          {Object.values(HolidayTimeframeEnum).map((timeframe) => (
            <Option key={timeframe} value={timeframe}>
              {timeframe}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Divider orientation="left">Activities</Divider>

      <Form.List name="activities">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map((field, index) => (
                <FormActivityRow
                  key={field.key}
                  index={index}
                  remove={remove}
                />
              ))}
            </div>
            <Button onClick={() => add()} icon={<PlusOutlined />}>
              Add activity
            </Button>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button className="createTripButton" type="primary" htmlType="submit">
          {edit ? "Edit Trip" : "Create Trip"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateEditTripForm;

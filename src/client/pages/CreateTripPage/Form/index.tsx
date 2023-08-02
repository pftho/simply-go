import { PlusOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth.context";
import { useCreateSurveyMutation } from "../../../services/trips/actions";
import { Activity } from "../../../types/activity/types";
import { HolidayTimeframeEnum } from "../../../types/trip/enums";
import FormActivityRow from "../FormItineraryRow";
import "./styles.css";

const CreateTripForm = () => {
  const { Option } = Select;
  const { Title } = Typography;
  const queryClient = useQueryClient();
  const createTrip = useCreateSurveyMutation();
  const { user } = useAuth();
  const [storedImageUrl, setStoredImageUrl] = useState("");
  const navigate = useNavigate();

  if (!user) {
    return <Spin />;
  }

  const onFinish = ({
    name,
    activities,
    description,
    holidayTimeframe,
    recommendedBudget,
  }: {
    name: string;
    activities: Activity[];
    description?: string;
    holidayTimeframe: string;
    recommendedBudget: string;
  }) => {
    createTrip.mutate(
      {
        name,
        description,
        holidayTimeframe,
        activities,
        recommendedBudget: Number(recommendedBudget),
        ownerId: user._id,
        imageUrl: storedImageUrl,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [user?._id || "unlogged", "trips"],
          });
          navigate("/trips");
        },
      }
    );
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoredImageUrl(e.target.value);
  };

  return (
    <Form className="createTripForm" onFinish={onFinish} layout="vertical">
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
          Create Trip
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTripForm;

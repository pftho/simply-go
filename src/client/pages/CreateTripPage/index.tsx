import CoverImage from "../../components/organisms/CoverImage";
import CreateTripForm from "./Form";
import "./styles.css";

function CreateTripPage() {
  const imageUrl =
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80";

  return (
    <>
      <CoverImage imageUrl={imageUrl} title={"Plan your next adventure"} />
      <div className="createTripFormContainer">
        <CreateTripForm />
      </div>
    </>
  );
}

export default CreateTripPage;

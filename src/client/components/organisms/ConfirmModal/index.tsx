import { Modal } from "antd";

function ConfirmationModal({
  isOpen,
  handleOk,
  handleCancel,
  title,
  modalText,
}: {
  title: string;
  modalText: string;
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) {
  return (
    <>
      <Modal
        title={title}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}

export default ConfirmationModal;

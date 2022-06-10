import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../postShare/PostShare";

const ShareModal = ({ modalOpen, setModalOpen }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpen}
      size="50%"
      onClose={() => setModalOpen(false)}
    >
      <h1>Share</h1>
      <PostShare />
    </Modal>
  );
};

export default ShareModal;

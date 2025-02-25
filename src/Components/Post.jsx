import { useState } from "react";
import { Button, Modal, Input } from "antd";
import { useDispatch } from "react-redux";
import { addPost } from "../store/PostSlice";
import { createPost } from "../services/postApi";

const Post = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { TextArea } = Input;
  const showModal = () => {
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      setIsLoading(true);
      // Tạo object post mới
      const newPost = {
        content: inputValue,
        name: "Minh Lương",
        role: "@MinhLuong",
        time: new Date().toISOString(),
      };

      // Gọi API để tạo post
      const createdPost = await createPost(newPost);

      // Dispatch action để cập nhật Redux store
      dispatch(addPost(createdPost));

      // Reset form
      setInputValue("");
      setOpen(false);
    } catch (error) {
      console.error("Error creating post:", error);
      // Xử lý lỗi ở đây (có thể hiển thị thông báo lỗi)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-white p-4 w-full rounded-lg shadow">
      <div className="flex my-3 mb-5">
        <div className="icon-container">
          <img
            src="https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991"
            alt="avatar"
            className="rounded-full w-12 h-12"
          />
        </div>
        <Button
          className="w-5/6 "
          onClick={showModal}
          style={{
            marginLeft: "15px",
            height: "44px",
            backgroundColor: "#f0f2f5",
            color: "#65676b",
            borderRadius: "20px",
            zIndex: 0,
          }}
        >
          Bạn đang nghĩ gì thế?
        </Button>
        <Modal
          title={<span className="text-2xl font-semibold">Tạo bài viết</span>}
          open={open}
          onOk={handleSubmit}
          confirmLoading={isLoading}
          onCancel={() => setOpen(false)}
        >
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 pt-4"
          >
            <div className="flex ml-2 mb-2">
              <img
                src="https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991"
                alt="avatar"
                className="rounded-full w-10 h-10 mb-4"
              />
              <h1 className="ml-4 text-lg font-seminal">Minh Lượng</h1>
            </div>
            <TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Bạn đang nghĩ gì thế?"
              autoSize={{ minRows: 4, maxRows: 8 }}
              style={{
                height: "40px",

                color: "#65676b",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
              ghost
            />
          </form>
        </Modal>
      </div>
      <div>
        <div className="flex justify-between border-t pt-2.5 border-gray-700">
          <button className="flex-1 flex items-center h-10 justify-center space-x-2  hover:bg-[#ced0d1] rounded-lg transition-colors">
            <i className="fas fa-video text-red-500"></i>
            <span className="text-black">Video trực tiếp</span>
          </button>
          <button className="flex-1 flex items-center  justify-center space-x-2  hover:bg-[#ced0d1] rounded-lg transition-colors">
            <i className="fas fa-images text-green-500"></i>
            <span className="text-back">Ảnh/video</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2  hover:bg-[#ced0d1] rounded-lg transition-colors">
            <i className="far fa-smile text-yellow-500"></i>
            <span className="text-back">Cảm xúc/hoạt động</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

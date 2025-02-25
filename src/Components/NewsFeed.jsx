import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  ShareAltOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { getPosts } from "../services/postApi";
import { setPosts, toggleLike } from "../store/PostSlice";
import Post from "./Post";

const NewsFeed = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        const sortedPosts = postsData.sort((a, b) => {
          return new Date(b.time) - new Date(a.time);
        });
        dispatch(setPosts(sortedPosts));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [dispatch]);

  const handleLike = (postId) => {
    dispatch(toggleLike(postId));
  };

  const renderMedia = (post) => {
    if (post.media_type === "image") {
      return (
        <img
          src={post.media_url}
          alt="Post media"
          className="w-full rounded-lg object-cover max-h-[500px]"
        />
      );
    } else if (post.media_type === "video") {
      return (
        <div className="relative">
          <img
            src={post.media_url}
            alt="Video thumbnail"
            className="w-full rounded-lg object-cover max-h-[500px]"
          />
          <PlayCircleOutlined className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {/* Create Post */}
      <div className="bg-white rounded-xl shadow p-4">
        <Post />
      </div>

      {/* Posts List */}
      {posts?.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow p-4">
          {/* Post Header */}
          <div className="flex items-center gap-3 mb-4">
            <img src={"https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991"} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium">{post.name}</div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{post.role}</span>
                <span>•</span>
                <span>{new Date(post.time).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-gray-800">{post.content}</p>
          </div>

          {/* Post Media */}
          {post.media_url && (
            <div className="mb-4 rounded-xl overflow-hidden">
              {renderMedia(post)}
            </div>
          )}

          {/* Post Stats */}
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>{post.likes} lượt thích</span>
            <div className="flex gap-3">
              <span>{post.comments} bình luận</span>
              <span>{post.shares} chia sẻ</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex border-t pt-3">
            <button
              onClick={() => handleLike(post.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg"
            >
              {post.isLiked ? (
                <LikeFilled className="text-blue-500" />
              ) : (
                <LikeOutlined />
              )}
              <span>Thích</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
              <CommentOutlined />
              <span>Bình luận</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
              <ShareAltOutlined />
              <span>Chia sẻ</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;

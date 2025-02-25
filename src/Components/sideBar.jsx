const Sidebar = () => {


  const menuItems = [
    {
      icon: "🧑",
      text: "Phạm Lương",
      link: "/profile",
    },
    {
      icon: "👥",
      text: "Bạn bè",
      link: "/friends",
    },
    {
      icon: "🕐",
      text: "Kỷ niệm",
      link: "/memories",
    },
    {
      icon: "🔖",
      text: "Đã lưu",
      link: "/saved",
    },
    {
      icon: "👥",
      text: "Nhóm",
      link: "/groups",
    },
    {
      icon: "▶️",
      text: "Video",
      link: "/video",
    },
    {
      icon: "🏪",
      text: "Marketplace",
      link: "/marketplace",
    },
    {
      icon: "📰",
      text: "Bảng feed",
      link: "/feed",
    },
    {
      icon: "▼",
      text: "Xem thêm",
      link: "#",
    },
  ];

  const shortcuts = [
    {
      icon: "https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991",
      text: "DỊCH VỤ SUPPORT COURSERA và UDEMY - THẾ HỆ Z - OFFICIAL OPEN SOURCE FORUM",
      link: "/group1",
    },
    {
      icon: "https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991",
      text: "Tìm bạn thân khác giới",
      link: "/group2",
    },
    {
      icon: "https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991",
      text: "Cộng Đồng Kinh Doanh - Khởi Nghiệp",
      link: "/group3",
    },
    {
      icon: "https://external-preview.redd.it/0Q9tN0yT2zwdu2i2PyHf2B_h1SB9D7PM_DA_3piI2j4.jpg?width=640&crop=smart&auto=webp&s=d535fc207451e965fd4702d4d797b6bbab478991",
      text: "SDN303-SP25-SE1826",
      link: "/group4",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg"
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </div>

      <div className="my-4 border-t" />

      <h3 className="text-gray-500 px-2 mb-2">Lối tắt của bạn</h3>
      <div className="space-y-1">
        {shortcuts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg"
          >
            <img src={item.icon} alt="" className="w-9 h-9 rounded-lg" />
            <span className="line-clamp-2">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

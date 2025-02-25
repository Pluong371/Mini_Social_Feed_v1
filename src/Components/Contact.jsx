import { useEffect, useState } from "react";
import { getContact } from "../services/contactApi";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchGetContact = async () => {
      const contacts = await getContact();
      setContacts(contacts);
    };
    fetchGetContact();
  }, []);
  return (
    <div className=" h-[calc(100vh-40px)] bg-white p-2 w-11/12  rounded-lg shadow">
    
      <div className="flex justify-between items-center px-2 mb-2">
        <h2 className="text-gray-600 font-semibold">Người liên hệ</h2>
        <div className="flex space-x-2">
          <button className="hover:bg-gray-200 p-2 rounded-full">
            <i className="fas fa-search text-gray-600"></i>
          </button>
          <button className="hover:bg-gray-200 p-2 rounded-full">
            <i className="fas fa-ellipsis-h text-gray-600"></i>
          </button>
        </div>
      </div>

      {/* Contact List */}
      <div
        className="space-y-1 overflow-y-auto h-[calc(100vh-60px) ]"
        onMouseEnter={(e) => (e.currentTarget.style.overflowY = "auto")}
        onMouseLeave={(e) => (e.currentTarget.style.overflowY = "hidden")}
      >
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <div className="relative">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-9 h-9 rounded-full"
              />
              {contact.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <span className="text-[15px]">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

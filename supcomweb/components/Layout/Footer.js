import React from "react";
import LogoVPN from "../../public/assets/logosc.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-12 w-auto mb-6" />
          <p className="mb-4 ml-10">
            <strong className="font-medium">SUPCOM VN</strong> là một công ty cung cấp các dịch vụ doanh nghiệp.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2 ml-6">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400 ml-8">©{new Date().getFullYear()} - SUPCOM</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Dịch vụ</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Thành lập doanh nghiệp{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Hỗ trợ kế toán{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Đăng ký kinh doanh{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Chữ ký số{" "}
            </li>
  
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Khám phá</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Về Supcom{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Chợ ứng dụng{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Hợp tác{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Liên hệ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Chính sách{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Blogs</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Tài chính - kế toán{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Marketing - bán hàng{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Quản lý nhân lực{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Quản lý điều hành{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Chuyển đổi số{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

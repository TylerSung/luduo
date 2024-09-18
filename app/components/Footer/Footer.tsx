import {
  brandCases,
  furnitureList,
  luBanInfo,
  spacePlanning,
} from "./FooterItem";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white text-sm">
      <div className="container py-20 flex justify-between">
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">产品中心</h3>
          <div className="flex flex-col gap-3 text-white/60">
            {furnitureList.map((item) => {
              return (
                <div key={item.id} className="flex text-left">
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        {/* 服务行业 */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">服务行业</h3>
          <div className="flex flex-col gap-3 text-white/60">
            {brandCases.map((item) => {
              return <div key={item.id}>{item.title}</div>;
            })}
          </div>
        </div>
        {/* 空间规划 */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">空间规划</h3>
          <div className="flex flex-col gap-3 text-white/60">
            {spacePlanning.map((item) => {
              return <div key={item.id}>{item.title}</div>;
            })}
          </div>
        </div>
        {/* 关于我们 */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">关于我们</h3>
          <div className="flex flex-col gap-3 text-white/60">
            {luBanInfo.map((item) => {
              return <div key={item.id}>{item.title}</div>;
            })}
          </div>
        </div>
        {/* 联系我们 */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-bold mb-4">联系我们</h3>
          <div className="flex flex-col gap-10 text-white/60">
            <div className="flex flex-col text-left">
              <span className="text-white text-2xl">135 6435 5922</span>
              <span className="text-white/60">全国服务热线 9:00-18:00</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-2xl">150 0079 5110</span>
              <span className="text-white/60">销售经理直线 9:00-18:00</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white/60">
                <a
                  href="mailto:123456789@gamil.com"
                  className="text-white text-2xl">
                  h13564355922@163.com
                </a>
              </span>
              <span className="text-white/60">服务邮箱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

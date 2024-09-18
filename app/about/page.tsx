const About = () => {
  return (
    <div className="w-full">
      <div className="container  text-slate-800 my-10">
        <div className="flex gap-4">
          <div className="flex-1 my-10">
            <h1 className="text-2xl font-bold my-4  text-red-600">
              鹿多实业有限公司
            </h1>
            鹿多实业有限公司主要经营鹿多品牌办公家具，是长三角地区总代理商，鹿多是集设计、生产、销售为一体的办公家具制造商。拥有一定的影响力，同时在产品的开发、生产、品质管控方面经验非常的丰富。
            得力集团在中国办公行业具有较高的品牌影响力，拥有着一站式办公整体解决方案及强大的办公用品营销体系。
            如果您需要进一步修改其他相关名称或内容，请随时告知！
          </div>
          <div className="flex-1">
            <img src="/image/1.jpeg" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

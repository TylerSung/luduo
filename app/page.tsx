import Banner from "./components/Banner";
import Card from "./components/Card";
import Firm from "./components/qiye";

import TextTitle from "./components/TextTitle";
const page = () => {
  return (
    <div className=" w-full  min-h-full">
      <Banner />
      <TextTitle title="您要找那一类家具" />
      <Card />
      <TextTitle title="鹿多主力每一家成功的企业" doc="鹿多是他们最佳的选择" />
      <Firm />
    </div>
  );
};

export default page;

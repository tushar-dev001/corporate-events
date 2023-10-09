import Navbar from "../../../components/Shared/Navbar/Navbar";
import AddFundsCard from "../AddFundsCard/AddFundsCard";
import Card from "../AddFundsCard/Card";
import Banner from "../Banner/Banner";
import Conferences from "../Conferences/Conferences";
import CreateReality from "../CreateReality/CreateReality";
import LatestNews from "../LatestNews/LatestNews";
import TeamBuildingActivitis from "../TeamBuildingActivities/TeamBuildingActivitis";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CreateReality></CreateReality>
      <LatestNews></LatestNews>
      <Conferences></Conferences>
      <AddFundsCard></AddFundsCard>
      <TeamBuildingActivitis></TeamBuildingActivitis>
      <Card></Card>
      <Conferences></Conferences>
    </div>
  );
};

export default Home;

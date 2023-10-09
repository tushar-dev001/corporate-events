
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import TeamBuildingCart from "./TeamBuildingCart";
import { useLoaderData } from "react-router-dom";

const TeamBuildingActivitis = () => {
      const news = useLoaderData()
  const teamBuildingActivitiesNews = news.events.product_launches

    

  return (

    <div className="mt-20">
        <SectionTitle subHeading='INFO UPDATE!' heading='Our Team-building activities'></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                teamBuildingActivitiesNews.map(item => <TeamBuildingCart key={item.id} item={item}></TeamBuildingCart>)
            }
        </div>

    </div>
    
  )
}

export default TeamBuildingActivitis
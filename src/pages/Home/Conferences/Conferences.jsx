
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import ConferenceCart from "./ConferenceCart";
import { useLoaderData } from "react-router-dom";

const Conferences = () => {
  const news = useLoaderData()
  const conferencesNews = news.events.conferences


  return (
    <div className="my-20">
      <SectionTitle
        subHeading="LISTEN TO THE EVENT SPEAKERS"
        heading="Conferences"
      ></SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
        conferencesNews.map(item => <ConferenceCart key={item.id} item={item}></ConferenceCart>)
    }
    </div>

    </div>
  );
};

export default Conferences;

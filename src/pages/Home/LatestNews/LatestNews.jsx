
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle"
import LatestNewsCart from "./LatestNewsCart";
import { useLoaderData } from "react-router-dom";

const LatestNews = () => {
    const news = useLoaderData()
    const allNews = news.events.product_launches

  return (
    <div>
        <SectionTitle subHeading='Info update' heading='Our Latest News'></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                allNews.map(item => <LatestNewsCart key={item.id} item={item}></LatestNewsCart>)
            }
        </div>
    </div>
  )
}

export default LatestNews
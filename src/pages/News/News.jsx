
import { useLoaderData, useParams } from "react-router-dom";
import NewsDetails from "./NewsDetails";


const News = () => {

  const {id,  name} = useParams()
  console.log(id, name);
  const AllNews = useLoaderData()
  const news = AllNews.events.conferences;
  console.log(news);

  


  return (
    <div>
     {
      news.map(aNews => <NewsDetails key={aNews.id} aNews={aNews}></NewsDetails>)
     }
    </div>
  );
};

export default News;

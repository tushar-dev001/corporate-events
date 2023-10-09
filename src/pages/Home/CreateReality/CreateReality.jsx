import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import about1 from "../../../assets/about/about1.jpg";
const CreateReality = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-center">
      <div className="w-1/2 ">
        <SectionTitle
          subHeading="JOIN THE EVENT"
          heading="We Create and Turn Into Reality"
        ></SectionTitle>

        <p className="mt-5">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>

        <div className="flex gap-x-4 mt-5">
        <button className="uppercase bg-red-500 p-5 text-white">Read More</button>
        <button className="uppercase bg-red-500 p-5 text-white">Buy Ticket</button>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="relative">
        <img src={about1} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default CreateReality;

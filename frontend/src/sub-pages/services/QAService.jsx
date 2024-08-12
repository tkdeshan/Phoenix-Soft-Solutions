import React from "react";
import service1 from "../../constants/images/services/webabout.jpg";
import anotherImage from "../../constants/images/services/webabout.jpg"; // Update this with your image source

const Card = ({ title, paragraph }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-4xl">
    {" "}
    {/* Increased card width */}
    <h2 className="text-xl font-semibold mb-2 text-red-600">{title}</h2>
    <p>{paragraph}</p>
  </div>
);

const Qa = () => {
  const cardData = [
    {
      title: "Vietnam's top 1% software engineer team",
      paragraph:
        "Saigon Technology is proud to be one of the firms that have attracted a lot of outstanding software engineers in the top 1% of Vietnam - particularly the team of Testers/Quality Control Engineers - and stands out for its QA testing services benefited many international initiatives.",
    },
    {
      title: "Concentrate all of our efforts on your project",
      paragraph:
        "You will assemble and allocate 100% of the human resources you have chosen to work only on developing your software project. This is not only a promise, but also a guiding principle of Saigon Technology over the last ten years, since customer-focus and result-orientation are the two most prominent values among the five iconic core principles.",
    },
    {
      title: "Ready to kick-off the project after only 3 working-day",
      paragraph:
        "Following an exchange of information and execution of the relevant contract, Saigon Technology will assemble a team as fast as possible to begin the project within three business days of receiving the crucial details. When it comes to processing projects quicker, we know more than anyone else that it will improve the speed of competition and help companies better compete in today's fast-paced marketplace.",
    },
    {
      title: "Same time-zone with you",
      paragraph:
        "The needs of the client come first, and the business time zones of the stakeholders are adjusted to accommodate the preferred agenda. In order to maintain the highest possible level of client satisfaction at all times, we make it a point to modify the working or meeting schedule wherever possible so that it is most suitable for the individual in question.",
    },
    {
      title: "The most affordable service prices in the Pacific-Asia region",
      paragraph:
        "Our costs for quality assurance testing services are among the most affordable in the Pacific Asia area, which is just another one of our many strengths. It goes without saying that we never lose sight of the importance of the quality aspect while doing so, preventing us from focusing on the price point alone. Because, in the end, what motivates clients to remain loyal to Saigon Technology and follow us for a longer period of time is still the professional working attitude and superior output quality.",
    },
    {
      title: "Validated Quality Assurance Procedures",
      paragraph:
        "Throughout our ten years of supporting software development clients, we have consistently devoted a significant amount of time and resources in enhancing our expertise and broadening the range of our offerings. Significantly, Saigon Technology has invested in testing and upgrading the quality assurance methods since its inception and continued growth in the IT industry.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service1}
          className="object-cover w-full h-full"
          alt="Mobile Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            DEVOPS SERVICE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-center">
          SAIGON TECHNOLOGY - WITH A DECADE OF<br></br> EXPERIENCE IN QA TESTING
          SERVICES
        </h1>
        <div className="text-center mb-8">
          <p className="mb-4">
            “Two of our many essential service categories are QA and Software
            Testing services, which are meant to <br></br>ensure that the
            software meets all of its standards and expectations before it is
            released.
          </p>
          <p className="mb-4">
            This guarantee contributes significantly to the success of the
            software in the future. In order to assist our<br></br> clients in
            delivering high-quality software in a timely manner, we offer
            comprehensive quality assurance<br></br> services under strict time
            constraints.”
          </p>
        </div>
        <img
          src={anotherImage} // Update this with your image source
          className="w-full max-w-md"
          alt="DevOps Services"
        />
        <p className="mb-4 text-center mt-8">
          The customizable service model offered by Saigon Technology includes
          web app/ mobile app and custom app testing. With<br></br> ten years of
          experience in the worldwide IT market - especially for QA testing
          software, we have numerous non-tech<br></br> and tech company clients
          from key nations such as the United States, Canada, the United
          Kingdom, Australia, Germany, and the<br></br> Netherlands… to seek
          guidance on appropriate software solutions; and have subsequently
          opted to continue with and<br></br> delegate the project to Saigon
          Technology for many years.
        </p>

        {/* New Heading with Red Underline */}
        <div className="w-full max-w-4xl text-center mt-12">
          <h1 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
            WHY SAIGON TECHNOLOGY FOR YOUR<br></br> SOFTWARE QA TESTING
            SERVICES?
          </h1>
          <div className="border-b-4 border-red-500 w-1/3 mx-auto"></div>
        </div>

        {/* Card Section */}
        <div className="flex flex-col items-center mt-12 px-4">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} paragraph={card.paragraph} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qa;

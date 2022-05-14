const LOCATIONS = {
  SUNDIAL: {
    name: "Sundial Beach Resort & Spa",
    logo: "sundial.png",
    link: "https://sundialresort.com/",
    map: "https://g.page/SundialResort?share",
    address1: "1451 Middle Gulf Drive",
    address2: "Sanibel, FL 33957",
  },
  DUNES: {
    name: "The Dunes Golf & Tennis Club",
    logo: "dunes.png",
    link: "",
    map: "https://goo.gl/maps/Q55mCcRR2fPiZEaf8",
    address1: "949 Sand Castle Rd",
    address2: "Sanibel, FL 33957",
  },
  CASA: {
    name: "Casa Ybel Beach Resort",
    logo: "ybel.png",
    map: "https://goo.gl/maps/tWHs6EKjz8AWyWep9",
    link: "https://www.casaybelresort.com/",
    address1: "2255 West Gulf Drive",
    address2: "Sanibel, FL 33957",
  },
};

function Splash() {
  return (
    <>
      <div
        className="hidden sm:block pt-32 md:pt-64 text-center w-full"
        style={{
          background: 'url("/images/flowers.jpeg") no-repeat fixed bottom',
          height: "1020px",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-2xl md:text-4xl text-primary">
          — October 29th, 2022 —
        </h2>
        <h1 className="text-3xl md:text-9xl text-primary py-2 md:py-6">
          Liz & Rick
        </h1>
        <h2 className="text-2xl md:text-4xl text-primary">
          Sanibel Island, Florida
        </h2>
      </div>
      <div
        className="block sm:hidden pt-32 md:pt-64 text-center w-full"
        style={{
          background: 'url("/images/flowers.jpeg") no-repeat fixed bottom',
          height: "100vh",
          backgroundSize: "400%",
        }}
      >
        <h2 className="text-2xl md:text-4xl text-primary">
          — October 29th, 2022 —
        </h2>
        <h1 className="text-3xl md:text-9xl text-primary py-2 md:py-6">
          Liz & Rick
        </h1>
        <h2 className="text-2xl md:text-4xl text-primary">
          Sanibel Island, Florida
        </h2>
      </div>
    </>
  );
}
function Header() {
  return (
    <div
      className="flex p-8 text-center fixed w-full"
      style={{
        background: 'url("/images/flowers.jpeg") no-repeat fixed top',
        backgroundSize: "100% 100%",
      }}
    >
      <h2 className="flex-0 text-xl w-72 font-neue font-light">
        {/*<a href="#" className="hover:underline pr-6 leading-relaxed">*/}
        {/*  What*/}
        {/*</a>*/}
        <a href="#schedule" className="hover:underline pr-6 leading-relaxed">
          Schedule
        </a>
        {/*<a href="#where" className="hover:underline pr-6 leading-relaxed">*/}
        {/*  Where*/}
        {/*</a>*/}
        <a href="#how" className="hover:underline pr-6 leading-relaxed">
          Accommodations
        </a>
      </h2>
      <h1 className="text-xl flex-1 md:text-4xl text-primary font-light font-normal">
        Liz & Rick
      </h1>

      <h2 className="hidden md:block flex-0 text-xl w-72 font-neue font-light text-right">
        <a href="#registry" className="hover:underline pr-6 leading-relaxed">
          Registry
        </a>
      </h2>
    </div>
  );
}

function WhenDay({ day, children, location }) {
  return (
    <div className="flex flex-col mr-4">
      <h2 className="text-3xl text-primary text-center">{day}</h2>
      <div className="flex flex-col justify-center items-center mt-2">
        <h2 className="text-lg text-gray-500">{location.name}</h2>
        {/*<p className="text-md font-neue font-extralight mt-1 text-center">*/}
        {/*  {location.address1}*/}
        {/*  <br />*/}
        {/*  {location.address2}*/}
        {/*</p>*/}
        {/*<p className="text-xl font-neue font-extralight mt-2">*/}
        {/*  <a*/}
        {/*    href={location.map}*/}
        {/*    target="_blank"*/}
        {/*    rel="noreferrer"*/}
        {/*    className="hover:underline mt-2"*/}
        {/*  >*/}
        {/*    Map*/}
        {/*  </a>*/}
        {/*</p>*/}
      </div>
      <div>{children}</div>
    </div>
  );
}

function WhenGroup({ option, children }) {
  return (
    <div className="border border-primary rounded mt-4">
      {children}
      <p className="font-neue font-light text-sm text-center text-gray-400 lowercase pt-4 mb-1">
        {option}
      </p>
    </div>
  );
}

function WhenCard({ title, day, time, attire, description, location, option }) {
  return (
    <div className="w-72 p-5 pb-0">
      <h2 className="text-xl text-primary">
        <span className="float-right text-sm text-gray-400 pt-1 ">{time}</span>
        {title}
      </h2>
      {/*<p className="font-neue font-extralight text-right">{location}</p>*/}
      <p className="font-neue font-extralight text-gray-400 tracking-wide">
        {attire}
      </p>
      {description && (
        <>
          {/*<div className="relative flex py-5 px-5 items-center">*/}
          {/*  <div className="flex-grow border-t border-gray-400"></div>*/}
          {/*</div>*/}
          <p className="font-neue font-extralight text-left mt-2 tracking-wide">
            {description}
          </p>
        </>
      )}
    </div>
  );
}
function When() {
  return (
    <div
      id="schedule"
      className="flex flex-col justify-center items-center pt-32 mb-60"
    >
      <h1 className="text-5xl text-primary mb-6">Schedule</h1>
      <h2 className="text-3xl text-primary mb-2">
        October 27th - October 30th 2022
      </h2>
      <h2 className="text-xl text-gray-500  mb-16">
        Invitation to follow, but here is a snapshot of the weekend
      </h2>
      <div className="flex flex-col md:flex-row">
        <WhenDay day="Thursday" location={LOCATIONS.SUNDIAL}>
          <WhenGroup option="Optional">
            <WhenCard
              title="Toast to the Weekend"
              time="6pm - 9pm"
              attire="Island Casual Attire"
              attireHint="Shorts, Khakis, White Jeans, and Sundresses."
              description="There will be little bites and cocktails to kick off the weekend!"
            />
          </WhenGroup>
        </WhenDay>
        <WhenDay day="Friday" location={LOCATIONS.DUNES}>
          <WhenGroup option="Optional">
            <WhenCard
              title="Golf with the Groom"
              time="9am - 2pm"
              attire="Golf attire"
              description="Play a round of 18 with the groom. Golf clubs provided."
            />
          </WhenGroup>
          {/*<div className="text-center text-primary -my-4"> - Or -</div>*/}
          {/*<WhenCard*/}
          {/*  title="Swim with the Bride"*/}
          {/*  day="Friday"*/}
          {/*  location="Sundial Resort"*/}
          {/*  time="9am - 2pm"*/}
          {/*  attire="Swim attire"*/}
          {/*/>*/}
          <WhenGroup option="Recommended">
            <WhenCard
              title="Welcome Party"
              time="6pm - 9pm"
              attire="Dressy Casual Attire"
              attireHint="Linen and Florals encouraged"
              description="Join the bride and groom for an island BBQ!"
            />
          </WhenGroup>
        </WhenDay>
        <WhenDay day="Saturday" location={LOCATIONS.CASA}>
          <WhenGroup>
            <WhenCard
              title="Ceremony"
              time="5pm - 5:30pm"
              attire="Cocktail Attire"
              attireHint="Cocktail Dresses and Suits"
              description="Ceremony will be hosted on the Casa Ybel Lawn followed by a short walk across the lawn to the reception."
            />
            <WhenCard
              title="Celebration"
              time="6pm - 10pm"
              attire="Cocktail Attire"
              attireHint="Cocktail Dresses and Suits"
              description="Dinner will be provided followed by cake and live music."
            />
          </WhenGroup>
          <WhenGroup option="Recommended">
            <WhenCard
              title="After-party"
              time="10pm - 12am"
              attire="Semi-Formal Attire"
              attireHint="Tuxes and gowns are welcome, and so are suits and cocktail dresses."
              description="After-party hosted inside after the Celebration."
            />
          </WhenGroup>
        </WhenDay>
        <WhenDay day="Sunday" location={LOCATIONS.SUNDIAL}>
          <WhenGroup option="Optional">
            <WhenCard
              title="Sunday Bunch"
              time="10am - 12pm"
              attire="Casual Attire"
              attireHint="Anything goes, from sundresses and sandals to jeans and tees."
              description="Drop by to say goodbye to the bride and groom!"
            />
          </WhenGroup>
        </WhenDay>
      </div>
    </div>
  );
}

function WhereCard({ location, what }) {
  return (
    <div className="flex flex-col justify-center items-center p-5 m-10">
      <div className="w-80 h-64 p-10 flex justify-end">
        <img src={`/images/${location.logo}`} className="m-auto" />
      </div>
      <h2 className="text-3xl text-primary mt-8">{location.name}</h2>
      <p className="text-xl font-neue font-normal mt-2">{what}</p>
      <p className="text-lg font-neue font-extralight mt-2">
        {location.address1}
        <br />
        {location.address2}
      </p>
      <p className="text-xl font-neue font-extralight mt-2">
        <a
          href={location.map}
          target="_blank"
          rel="noreferrer"
          className="hover:underline mt-2"
        >
          Map
        </a>
      </p>
    </div>
  );
}

function Where() {
  return (
    <div id="where" className="pt-10 text-center bg-faded pb-10">
      <div className="flex flex-col justify-center items-center p-20">
        <div className="flex flex-col md:flex-row">
          <WhereCard
            location={LOCATIONS.SUNDIAL}
            what="Welcome Drinks & Brunch"
          />
          <WhereCard
            location={LOCATIONS.DUNES}
            what="Golf & Rehearsal Dinner"
          />
          <WhereCard location={LOCATIONS.CASA} what="Ceremony & Celebration" />
        </div>
      </div>
    </div>
  );
}

function HowCard({ location, what, notes }) {
  return (
    <div className="flex flex-col justify-center items-center p-5 m-10">
      <div className="w-80 h-64 p-2 flex justify-end">
        <a
          href={location.link}
          target="_blank"
          rel="noreferrer"
          className="hover:underline mt-2"
        >
          <img src={`/images/${location.logo}`} className="m-auto" />
        </a>
      </div>
      <a
        href={location.link}
        target="_blank"
        rel="noreferrer"
        className="hover:underline mt-2"
      >
        <h2 className="text-2xl text-primary mt-2">{location.name}</h2>
      </a>
      <p className="text-xl font-neue font-normal mt-2">{what}</p>
      <p className="text-lg font-neue font-extralight mt-2">
        {location.address1}
        <br />
        {location.address2}
      </p>
      <p className="text-lg font-neue font-extralight mt-2">{notes}</p>
    </div>
  );
}

function How() {
  return (
    <div id="accommodations" className="text-center">
      <h1 className="text-5xl text-primary mb-2 mt-40">Accommodations</h1>
      <div className="flex flex-col justify-center items-center p-20">
        <div className="flex flex-col md:flex-row">
          TODO
          {/*<HowCard*/}
          {/*  location={LOCATIONS.SUNDIAL}*/}
          {/*  notes="Room block reserved. Details to come."*/}
          {/*/>*/}
          {/*<HowCard*/}
          {/*  location={LOCATIONS.CASA}*/}
          {/*  notes="Room block reserved. Details to come."*/}
          {/*/>*/}
          {/*<HowCard*/}
          {/*  logo="airbnb.png"*/}
          {/*  link="https://airbnb.com"*/}
          {/*  title="AirBnB"*/}
          {/*  address1=""*/}
          {/*  address2=""*/}
          {/*  notes="TODO"*/}
          {/*/>*/}
          {/*<HowCard*/}
          {/*  logo="rsw.png"*/}
          {/*  link="https://www.flylcpa.com/"*/}
          {/*  title="Fort Meyers (RSW)"*/}
          {/*  address1=""*/}
          {/*  address2=""*/}
          {/*  notes="TODO"*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
}

function Registry() {
  return (
    <div id="registry" className="pt-40 text-center bg-faded">
      <h1 className="text-5xl text-primary ">Registry</h1>
      <h2 className="text-xl mt-2 pb-40  flex justify-center items-center text-center">
        <div className="w-80 h-64">
          <a href="#">
            <img src={`/images/bloomingdales.png`} className="m-auto" />
          </a>
        </div>
      </h2>
    </div>
  );
}

function Footer() {
  return (
    <div className="py-40 text-center bg-primary">
      <h1 className="text-3xl text-white mb-2">Liz & Rick</h1>
      <h1 className="text-lg text-white mb-2">Made with 🤍 in NY</h1>
    </div>
  );
}
export default function Home() {
  return (
    <main className="h-full w-full text-gray-600 tracking-normal">
      <Header />
      <Splash />
      <When />
      {/*<div*/}
      {/*  className="text-center w-full mt-40"*/}
      {/*  style={{*/}
      {/*    background: 'url("/images/sanibel.png") no-repeat fixed bottom',*/}
      {/*    height: "600px",*/}
      {/*    backgroundSize: "cover",*/}
      {/*  }}*/}
      {/*/>*/}
      <Where />
      <How />
      <Registry />
      <Footer />
    </main>
  );
}

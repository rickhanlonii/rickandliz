const LOCATIONS = {
  SUNDIAL: {
    name: "Sundial Beach Resort & Spa",
    logo: "sundial.png",
    link: "https://sundialresort.com/",
    map: "https://g.page/SundialResort?share",
    address1: "1451 Middle Gulf Drive",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-4151",
  },
  DUNES: {
    name: "The Dunes Golf & Tennis Club",
    logo: "dunes.png",
    link: "",
    map: "https://goo.gl/maps/Q55mCcRR2fPiZEaf8",
    address1: "949 Sand Castle Rd",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-2535",
  },
  CASA: {
    name: "Casa Ybel Beach Resort",
    logo: "ybel.png",
    map: "https://goo.gl/maps/tWHs6EKjz8AWyWep9",
    link: "https://www.casaybelresort.com/",
    address1: "2255 West Gulf Drive",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-3145",
  },
  MARRIOTT: {
    name: "Marriott Sanibel Harbor Resort & Spa",
    logo: "",
    map: "",
    link: "https://www.marriott.com/en-us/hotels/rswsb-marriott-sanibel-harbour-resort-and-spa/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
    address1: "17260 Harbour Pointe Drive",
    address2: "Fort Myers, FL 33908",
    phone: "(239) 466-4000",
  },
};

const ACTIVITIES = [
  {
    name: "Tarpon Bay Explorers",
    type: "Kayaking",
    link: "https://tarponbayexplorers.com/",
    address1: "900 Tarpon Bay Rd",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-8900",
  },
  {
    name: "Billy’s Rentals",
    type: "Bike Rentals",
    link: "https://www.billysrentals.com/",
    address1: "1470 Periwinkle Way",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-5248",
  },
  {
    name: "National Shell Museum",
    type: "Museum",
    link: "https://www.shellmuseum.org/",
    address1: "3075 Sanibel Captiva Rd",
    address2: "Sanibel, FL 33957",
    phone: "(239) 395-2233",
  },
  {
    name: "Sanibel Thriller",
    type: "Boat Ride",
    link: "https://sanibelthriller.com/",
    address1: "634 N Yachtsman Dr",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-2328",
  },
];
const RESTAURANTS = [
  {
    name: "Over Easy Café",
    link: "http://www.overeasycafesanibel.com/",
    address1: "630 Tarpon Bay Road",
    address2: "Sanibel, Florida  33957",
    phone: "(239) 472-2625",
  },
  {
    name: "Lighthouse Café",
    link: "https://www.lighthousecafe.com/",
    address1: "362 Periwinkle Way",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-0303",
  },
  {
    name: "Island Cow",
    link: "https://sanibelislandcow.com/",
    address1: "2163 Periwinkle Way",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-0606",
  },
  {
    name: "Sanibel Café",
    link: "https://www.sanibelcafe.com/",
    address1: "2007 Periwinkle Way",
    address2: "Sanibel Island, FL 33957",
    phone: "(239) 472-5323",
  },
  {
    name: "Lazy Flamingo",
    link: "https://lazyflamingo.com/",
    address1: "1036 Periwinkle Way",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-6939",
  },
  {
    name: "Doc Ford’s",
    link: "https://www.docfords.com/sanibel-island/",
    address1: "2500 Island Inn Rd",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-8311",
  },
  {
    name: "Grandma Dot’s",
    link: "https://www.sanibelmarina.com/dining/",
    address1: "634 N Yachtsman Dr",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-8138",
  },
  {
    name: "Timber’s",
    link: "https://timbersofsanibel.com/",
    address1: "703 Tarpon Bay Road",
    address2: "Sanibel Florida, 33957",
    phone: "(239) 395-2722",
  },
  {
    name: "Trader’s",
    link: "https://traderssanibel.com/",
    address1: "1551 Periwinkle Way",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-7242",
  },
  {
    name: "Sandbar",
    link: "https://www.sanibelsandbar.com/",
    address1: "2761 West Gulf Drive",
    address2: "Sanibel, Florida 33957",
    phone: "(239) 472-0305",
  },
  {
    name: "Sweet Melissa's Cafe",
    link: "https://sweetmelissascafe.com/",
    address1: "1625 Periwinkle Way",
    address2: "Sanibel, FL 33957",
    phone: "(239) 472-1956",
  },
];

function Splash() {
  return (
    <>
      <div
        className="flex flex-row text-center w-full"
        style={{
          height: "calc(100vh)",
          backgroundColor: "#FDFCEA",
        }}
      >
        <div className="hidden md:block absolute top-0 right-0 bottom-0 left-0">
          <div className="flex justify-center items-center h-full w-full z-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl text-black">
                October 29th, 2022
              </h2>
              <h1 className="text-3xl md:text-8xl text-black py-6 md:py-10">
                Elizabeth Vernal
                <br />&<br />
                Richard Hanlon
              </h1>
              <h2 className="text-2xl md:text-3xl text-black">
                Sanibel Island, Florida
              </h2>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center w-full z-10">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl text-black">
              October 29th, 2022
            </h2>
            <h1 className="text-5xl md:text-8xl text-black py-6 md:py-10">
              Elizabeth Vernal
              <br />&<br />
              Richard Hanlon
            </h1>
            <h2 className="text-xl md:text-3xl text-black">
              Sanibel Island, Florida
            </h2>
          </div>
        </div>
        <div
          className="hidden lg:block flex-1 "
          style={{
            background: 'url("/images/birdsl.png") no-repeat fixed left top',
            backgroundSize: "auto 100%",
          }}
        />
        <div
          className="hidden lg:block flex-1"
          style={{
            background: 'url("/images/birdsr.png") no-repeat fixed right top',
            backgroundSize: "auto 100%",
          }}
        />
      </div>
    </>
  );
}
function Header() {
  return (
    <>
      <div className="flex flex-col md:hidden flex p-5 justify-center fixed w-full z-20 bg-white">
        <div className="flex flex-row justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl flex-0 text-primary font-thin mx-16">
            Liz & Rick
          </h1>
        </div>
        <div className="flex flex-row justify-around">
          <a href="#schedule" className="hover:underline leading-relaxed">
            Schedule
          </a>
          <a href="#accommodations" className="hover:underline leading-relaxed">
            Accommodations
          </a>
          <a href="#photos" className="hover:underline leading-relaxed">
            Photos
          </a>
          <a href="#registry" className="hover:underline leading-relaxed">
            Registry
          </a>
        </div>
      </div>
      <div className="hidden md:flex flex p-5 text-center fixed w-full z-20 bg-white">
        <div className="flex-1 text-base lg:text-lg xl:text-xl font-neue font-light flex flex-row justify-end items-center text-right uppercase">
          <a
            href="#home"
            className=" hidden lg:block hover:underline leading-relaxed"
          >
            Home
          </a>
          <a href="#schedule" className="hover:underline pl-6 leading-relaxed">
            Schedule
          </a>
          <a
            href="#accommodations"
            className="hover:underline pl-6 leading-relaxed"
          >
            Accommodations
          </a>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl flex-0 text-primary font-thin mx-16">
          Liz & Rick
        </h1>

        <div className="flex-1 text-base lg:text-lg xl:text-xl font-neue font-light flex flex-row justify-start items-center text-left uppercase">
          <a href="#registry" className="hover:underline pr-6 leading-relaxed">
            Registry
          </a>
          <a href="#photos" className="hover:underline pr-6 leading-relaxed">
            Photos
          </a>
          <a
            href="#things"
            className="hidden lg:block  hover:underline leading-relaxed"
          >
            Things to Do
          </a>
        </div>
      </div>
    </>
  );
}

function WhenDay({ day, children, location }) {
  return (
    <div className="flex flex-col pl-4 mt-4 md:pl-0 md:mt-0 md:mr-4">
      <h2 className="text-3xl text-primary text-left md:text-center">{day}</h2>
      <div className="flex flex-col justify-start items-start md:justify-center md:items-center mt-2">
        <h2 className="text-lg text-black font-neue ">{location.name}</h2>
        <p className="text-md text-black text-left md:text-center font-neue font-extralight">
          {location.address1}
          <br />
          {location.address2}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
}

function WhenGroup({ option, children }) {
  return <div className="mt-4">{children}</div>;
}

function WhenCard({ title, day, time, attire, description, location, option }) {
  return (
    <div className="w-80 p-5 pb-0 font-neue font-extralight">
      <h2 className="text-xl text-primary">
        <span className="float-right text-sm  pt-1 ">{time}</span>
        {title}
      </h2>
      {/*<p className="font-neue font-extralight text-right">{location}</p>*/}
      <p className="font-neue font-extralight tracking-wide">{attire}</p>
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
      <h2 className="text-center text-lg md:text-3xl text-black mb-2 font-neue font-extralight">
        October 27th - October 30th 2022
      </h2>
      <h2 className="text-center text-base md:text-xl text-black mb-16 font-neue font-light">
        Invitation to follow, but here is a snapshot of the weekend
      </h2>
      <div className="flex flex-col md:flex-row justify-around w-full flex-wrap">
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
              title="Sunday Brunch"
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
    <div className="flex flex-col justify-center items-center p-5 m-10 mt-0">
      <div className="w-64 h-48 p-10 pt-0 pb-0 flex justify-end">
        <img src={`/images/${location.logo}`} className="m-auto" />
      </div>
      <h2 className="text-3xl text-primary mt-0">{location.name}</h2>
      <p className="text-xl font-neue font-normal mt-2">{what}</p>
      <p className="text-xl font-neue font-extralight mt-2 tracking-wide">
        {location.address1}
        <br />
        {location.address2}
      </p>
      <p className="text-xl font-neue font-extralight mt-2 tracking-wide">
        {location.phone}
      </p>
    </div>
  );
}

function HowCard({ location, name, subname, link, type, children }) {
  return (
    <div className="flex flex-col justify-start items-center p-5 mx-8">
      <a
        href={link || location.link}
        target="_blank"
        rel="noreferrer"
        className="hover:underline mt-2"
      >
        <h2 className="text-2xl text-primary mt-2">
          {name || location.name}
          {subname && (
            <>
              <br />
              {subname}
            </>
          )}
        </h2>
      </a>
      <h2 className="text-xl mt-2 uppercase font-neue font-extralight">
        {type}
      </h2>
      {location && (
        <p className="text-lg font-neue font-extralight mt-4 font-neue">
          {location.address1}
          <br />
          {location.address2}
          <br />
          {location.phone}
        </p>
      )}
      <div className="text-lg font-neue font-extralight mt-4 font-neue tracking-wide md:w-96">
        {children}
      </div>
    </div>
  );
}

function How() {
  return (
    <div id="accommodations" className="text-center">
      <h1 className="text-5xl md:text-5xl text-primary mb-2 pt-40 wrap">
        Travel & Accommodations
      </h1>
      <div className="flex w-full justify-center">
        <HowCard
          name="Fort Myers Airport"
          subname="RSW"
          link="https://www.google.com/travel/flights/flights-to-fort-myers.html"
          type="Flight"
        >
          <p className="mt-2">
            RSW is a 45 minute drive to Sanibel. Rental cars are available as
            well as Uber and Taxi Services.
          </p>
        </HowCard>
      </div>
      <div className="flex-col md:flex-row flex justify-center flex-wrap">
        <HowCard location={LOCATIONS.SUNDIAL} type="Hotel">
          <p className="mt-2">
            Toast to the Weekend and Farewell Brunch will be hosted at this
            location. Transportation will be provided for the other weekend
            events.
          </p>
          <p className="mt-2">
            One bedroom units are included in the room block.
          </p>
          <p className="mt-2">
            There are larger two and three bedroom units available for the
            weekend. If you are interested in this type of accommodation, please
            contact the bride for further information.
          </p>
          <p className="mt-2">
            To Book: Please call the Resort and reference Vernal - Hanlon
            Wedding. Please book by August 26th for room block rates.
          </p>
          <p>LINK TO BOOK COMING SOON!</p>
        </HowCard>
        <HowCard location={LOCATIONS.CASA} type="Hotel">
          <p className="mt-2">
            The Ceremony, Reception, and After Party will be hosted at this
            location. Transportation will be provided for the other weekend
            events.
          </p>
          <p className="mt-2">
            One bedroom units are included in the room block.
          </p>
          <p className="mt-2">
            To Book: Please call the Resort and reference Vernal - Hanlon
            Wedding. Please book by August 26th for room block rates.
          </p>
        </HowCard>
      </div>
      <div className="flex-col md:flex-row flex justify-center flex-wrap">
        <HowCard location={LOCATIONS.MARRIOTT} type="Hotel">
          <p className="mt-2">
            This is an alternate hotel option just off the island.
          </p>

          <p className="mt-2">
            Please click the link to book your room. There is no room block
            associated with this hotel and Guests will be responsible for their
            own transportation.
          </p>
        </HowCard>

        <HowCard
          name="AirBnB or VRBO"
          link="https://airbnb.com"
          type="House or Rental"
        >
          <p className="mt-2">
            There are some wonderful houses and condos to rent on the island.
            Guests will be responsible for their own transportation.
          </p>
        </HowCard>
      </div>
    </div>
  );
}

function Registry() {
  return (
    <div id="registry" className="pt-40 text-center bg-faded">
      <h1 className="text-5xl text-primary ">Registry</h1>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl mt-2 pb-20  flex justify-center items-center text-center">
          <div className="w-80 h-64">
            <a href="#">
              <img src={`/images/bloomingdales.png`} className="m-auto" />
            </a>
          </div>
        </h2>
        <h2 className="text-xl mt-2 pb-20  flex justify-center items-center text-center">
          <div className="w-80 h-64">
            <a href="#">
              <img src={`/images/ib.png`} className="m-auto" />
            </a>
          </div>
        </h2>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="py-40 text-center bg-primary">
      <h1 className="text-3xl text-white mb-2">Liz & Rick</h1>
      <h1 className="text-lg text-white mb-2">Made with 🤍 in NYC</h1>
    </div>
  );
}
function ImageCell({ src }) {
  return (
    <div
      className="w-full m-2 rounded lg:w-1/5"
      style={{
        background: `url(/images/${src}) no-repeat`,
        backgroundSize: "100% auto",
      }}
    >
      <img src={`/images/${src}`} />
    </div>
  );
}
function Photos() {
  return (
    <div id="photos" className="py-40 text-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center flex-wrap w-full">
          <ImageCell src="us1.png" />
          <ImageCell src="us2.jpeg" />
          <ImageCell src="us3.jpeg" />
          <ImageCell src="us4.jpeg" />
          <ImageCell src="us5.jpeg" />
          <ImageCell src="us6.jpeg" />
          <ImageCell src="us7.jpeg" />
          <ImageCell src="us8.jpeg" />
        </div>
      </div>
    </div>
  );
}

function ThingCard({ location, name, link }) {
  return (
    <div className="flex flex-col justify-start items-center p-5 mx-8 min-w-fit basis-1/5">
      <a
        href={link || location.link}
        target="_blank"
        rel="noreferrer"
        className="hover:underline mt-2"
      >
        <h2 className="text-2xl text-primary mt-2">
          {location.type && (
            <>
              {location.type}
              <br />
            </>
          )}
          <span className="font-medium">{name || location.name}</span>
        </h2>
      </a>
      {location && (
        <p className="text-lg font-neue font-extralight mt-4 font-neue">
          {location.address1}
          <br />
          {location.address2}
          <br />
          {location.phone}
        </p>
      )}
    </div>
  );
}

function Things() {
  return (
    <div id="things" className="py-40 text-center bg-faded ">
      <h1 className="text-5xl text-primary ">Things to Do</h1>
      <h2 className="text-4xl text-primary mt-10 mb-4">Activities</h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        {ACTIVITIES.map((thing) => (
          <ThingCard key={thing.name} location={thing} />
        ))}
      </div>
      <h2 className="text-4xl text-primary mt-10 mb-4">Restaurants</h2>
      <div className="flex flex-row justify-center items-center flex-wrap">
        {RESTAURANTS.map((thing) => (
          <ThingCard key={thing.name} location={thing} />
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main id="home" className="h-full w-full text-black tracking-wide">
      <Header />
      <Splash />
      <When />
      <How />
      <Registry />
      <Photos />
      <Things />
      <Footer />
    </main>
  );
}

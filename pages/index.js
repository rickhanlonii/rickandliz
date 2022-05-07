function Splash() {
  return (
    <div
      className="pt-64 text-center w-full"
      style={{
        background: 'url("/images/flowers.jpeg") no-repeat fixed bottom',
        height: "1020px",
        backgroundSize: "100% 100%",
      }}
    >
      <h2 className="text-4xl text-primary">— October 29th, 2022 —</h2>
      <h1 className="text-9xl text-primary py-6">Liz & Rick</h1>
      <h2 className="text-4xl text-primary">Sanibel Island, Florida</h2>
    </div>
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
        <a href="/" className="hover:underline pr-6 leading-relaxed">
          What
        </a>
        <a href="#when" className="hover:underline pr-6 leading-relaxed">
          When
        </a>
        <a href="#where" className="hover:underline pr-6 leading-relaxed">
          Where
        </a>
        <a href="#how" className="hover:underline pr-6 leading-relaxed">
          How
        </a>
      </h2>
      <h1 className="flex-1 text-4xl text-primary font-light font-normal">
        Liz & Rick
      </h1>

      <h2 className="flex-0 text-xl w-72 font-neue font-light text-center">
        <a href="#registry" className="hover:underline pr-6 leading-relaxed">
          Registry
        </a>
      </h2>
    </div>
  );
}

function WhenGroup({ day, children }) {
  return (
    <div className="flex flex-col mr-4">
      <h2 className="text-xl text-primary text-center">{day}</h2>
      <div className="border border-primary rounded mt-4">{children}</div>
    </div>
  );
}

function WhenCard({ title, day, time, description, location }) {
  return (
    <div className="w-72 p-5">
      <h2 className="text-xl text-primary">
        <span className="float-right text-sm text-black pt-1 ">{time}</span>
        {title}
      </h2>
      {/*<p className="font-neue font-extralight text-right">{location}</p>*/}
      <p className="font-neue font-extralight mt-2">{description}</p>
    </div>
  );
}
function When() {
  return (
    <div
      id="when"
      className="flex flex-col justify-center items-center pt-32 mb-60"
    >
      <h1 className="text-5xl text-primary mb-6">When</h1>
      <h2 className="text-3xl text-primary mb-2">
        October 27th - October 30th 2022
      </h2>
      <h2 className="text-xl text-black  mb-16">
        Invitation to follow, but here is a snapshot of the weekend
      </h2>
      <div className="flex flex-row">
        <WhenGroup day="Thursday">
          <WhenCard
            title="Welcome Drinks"
            day="Thursday"
            location="Sundial Resort"
            time="6pm - 9pm"
            description="Casual Attire: Anything goes, from sundresses and sandals to jeans
          and tees."
          />
        </WhenGroup>
        <WhenGroup day="Friday">
          <WhenCard
            title="Golf with the Groom"
            day="Friday"
            location="The Dunes"
            time="9am - 2pm"
            description="Golf attire"
          />
          <div className="text-center text-primary -my-4"> - Or -</div>
          <WhenCard
            title="Swim with the Bride"
            day="Friday"
            location="Sundial Resort"
            time="9am - 2pm"
            description="Swim attire"
          />
          <WhenCard
            title="Rehersal Dinner"
            day="Friday"
            location="The Dunes"
            time="6pm - 9pm"
            description="Beach Attire: Wear linen pants, short-sleeved button downs, maxi
            dresses, and sandals."
          />
        </WhenGroup>
        <WhenGroup day="Saturday">
          <WhenCard
            title="Ceremony"
            location="Casa Ybel Lawn"
            day="Saturday"
            time="5pm - 5:30pm"
            description="Semi-Formal: Tuxes and gowns are welcome, and so are suits and
            cocktail dresses."
          />
          <WhenCard
            title="Celebration"
            location="Casa Ybel"
            day="Saturday"
            time="6pm - 10pm"
            description="Semi-Formal: Tuxes and gowns are welcome, and so are suits and
            cocktail dresses."
          />
          <WhenCard
            title="After-party"
            location="Casa Ybel"
            day="Saturday"
            time="10pm - 12am"
            description="Semi-Formal: Tuxes and gowns are welcome, and so are suits and
            cocktail dresses."
          />
        </WhenGroup>
        <WhenGroup day="Sunday">
          <WhenCard
            title="Bunch"
            day="Sunday"
            time="10am"
            description="Casual Attire: Anything goes, from sundresses and sandals to jeans
            and tees."
          />
        </WhenGroup>
      </div>
    </div>
  );
}

function WhereCard({ title, address1, address2, what, logo, map }) {
  return (
    <div className="flex flex-col justify-center items-center p-5 m-10">
      <div className="w-80 h-64 p-10 flex justify-end">
        <img src={`/images/${logo}`} className="m-auto" />
      </div>
      <h2 className="text-3xl text-primary mt-8">{title}</h2>
      <p className="text-xl font-neue font-normal mt-2">{what}</p>
      <p className="text-lg font-neue font-extralight mt-2">
        {address1}
        <br />
        {address2}
      </p>
      <p className="text-xl font-neue font-extralight mt-2">
        <a href={map} target="_blank" className="hover:underline mt-2">
          Map
        </a>
      </p>
    </div>
  );
}

function Where() {
  return (
    <div id="where" className="pt-40 text-center bg-faded pb-20">
      <h1 className="text-5xl text-primary py-2">Where</h1>

      <div className="flex flex-col justify-center items-center p-20">
        <div className="flex flex-row">
          <WhereCard
            logo="sundial.png"
            map="https://g.page/SundialResort?share"
            title="Sundial Beach Resort & Spa"
            address1="1451 Middle Gulf Drive"
            address2="Sanibel, FL 33957"
            what="Welcome Drinks & Brunch"
          />
          <WhereCard
            logo="dunes.png"
            map="https://goo.gl/maps/Q55mCcRR2fPiZEaf8"
            title="The Dunes Golf & Tennis Club"
            address1="949 Sand Castle Rd"
            address2="Sanibel, FL 33957"
            what="Golf & Rehearsal Dinner"
          />
          <WhereCard
            logo="ybel.png"
            map="https://goo.gl/maps/tWHs6EKjz8AWyWep9"
            title="Casa Ybel Beach Resort"
            address1="2255 West Gulf Drive"
            address2="Sanibel, FL 33957"
            what="Ceremony & Celebration"
          />
        </div>
      </div>
    </div>
  );
}

function How() {
  return (
    <div id="how" className="text-center h-96">
      <h1 className="text-5xl text-primary mb-2 mt-40">How</h1>
      <h2 className="text-xl mt-10">Coming soon</h2>
    </div>
  );
}

function Registry() {
  return (
    <div id="registry" className="pt-40 text-center bg-faded h-96">
      <h1 className="text-5xl text-primary ">Registry</h1>
      <h2 className="text-xl mt-10">Coming soon</h2>
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
    <main className="h-full w-full text-black">
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

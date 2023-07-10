import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FCards from "./components/FCards";
import Button from "./components/Button";
import { BsStars } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  AiTwotoneFire,
  AiOutlineTwitter,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import CCards from "./components/CCards";
import { BsLink45Deg } from "react-icons/bs";
import { IoFlash } from "react-icons/io5";
import { FaUser, FaDiscord } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SmallButton from "./components/ButtonSmall";
import TCards from "./components/TCards";
import TimeCard from "./components/TimeCard";
import SpaceCard from "./components/SpaceCard";

const CardContainer = ({ children }) => {
  return (
    <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-5  ">
      {children}
      <style jsx>{`
        .flex-row {
          min-width: calc(100vw / 3 * ${children.length});
        }
      `}</style>
    </div>
  );
};

const CardContainerSmall = ({ children }) => {
  return (
    <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-3 mt-2 mb-0 ">
      {children}
      <style jsx>{`
        .flex-row {
          min-width: calc(100vw / 6 * ${children.length});
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  const scrollContainerRef = useRef(null);
  const scrollContainerRefTwo = useRef(null);
  const scrollContainerRefThree = useRef(null);
  const scrollContainerRefFour = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -800,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftTwo = () => {
    if (scrollContainerRefTwo.current) {
      scrollContainerRefTwo.current.scrollBy({
        left: -800,
        behavior: "smooth",
      });
    }
  };
  const scrollLeftThree = () => {
    if (scrollContainerRefThree.current) {
      scrollContainerRefThree.current.scrollBy({
        left: -800,
        behavior: "smooth",
      });
    }
  };
  const scrollLeftFour = () => {
    if (scrollContainerRefFour.current) {
      scrollContainerRefFour.current.scrollBy({
        left: -800,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 800,
        behavior: "smooth",
      });
    }
  };
  const scrollRightTwo = () => {
    if (scrollContainerRefTwo.current) {
      scrollContainerRefTwo.current.scrollBy({
        left: 800,
        behavior: "smooth",
      });
    }
  };
  const scrollRightThree = () => {
    if (scrollContainerRefThree.current) {
      scrollContainerRefThree.current.scrollBy({
        left: 800,
        behavior: "smooth",
      });
    }
  };
  const scrollRightFour = () => {
    if (scrollContainerRefFour.current) {
      scrollContainerRefFour.current.scrollBy({
        left: 800,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 976);
    };

    // Check on initial load
    checkIsDesktop();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsDesktop);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div>
        <p className="text-white border flex items-center justify-center h-screen p-6">
          Please switch to a desktop computer to view this site. Didn't have
          time to make it responsive. Sorry!
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-row justify-between items-center gap-10 mt-10">
        <FCards
          titleOne={"Exciting News!"}
          titleTwo={"Zealy's community is launching."}
          subtitle={"Join us to be a part of the movement."}
          image={"/blue.webp"}
        />
        <FCards
          titleOne={"New name"}
          titleTwo={"Same awesome product"}
          subtitle={" We’re excited to share our new name and brand with you."}
          image={"/red.webp"}
        />
      </div>
      <div className="flex flex-row mt-14">
        <div className="flex flex-row flex-grow">
          <Button text={"New"} icon={<BsStars />} />
          <Button text={"Feat"} icon={<AiFillStar />} />
          <Button text={"Trendy"} icon={<AiTwotoneFire />} />
          <Button text={"Upcoming"} icon={<GiSandsOfTime />} />
        </div>
        <div className="border-r border-gray-400 mx-4 mr-10 h-10"></div>

        <div className="flex flex-row flex-grow-3">
          <Button text={"All"} />
          <Button text={"Startup"} />
          <Button text={"Gaming"} />
          <Button text={"Infrastructure"} />
          <Button text={"Defi"} />
          <Button text={"Music"} />
          <Button text={"Metaverse"} />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <h1 className="text-white ">New Communities</h1>
        <div className="flex flex-row mt-10">
          <div className="items-center">
            <SmallButton icon={<AiOutlineLeft />} click={scrollLeft} />
          </div>
          <div className="items-center">
            <SmallButton icon={<AiOutlineRight />} click={scrollRight} />
          </div>
        </div>
      </div>

      <div className="scrollable-container -mb-12" ref={scrollContainerRef}>
        <CardContainer>
          <CCards
            image={"logo1"}
            title={"Burrito Wallet"}
            subtitle={
              "Connect to the world of Defi with Burrito Wallet 쉽고 편한 Web3.0 디지털 지갑 부리또 월렛입니다."
            }
            icon={<BsLink45Deg />}
            btext2={"29"}
            icon2={<IoFlash />}
            btext3={"12K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            btext5={"11K"}
            icon5={<FaDiscord />}
          />
          <CCards
            image={"logo2"}
            title={"HorizonDEX"}
            subtitle={
              "HorizonDEX is the first Concentrated Liquidity DEX built on ConsenSys’ Linea Layer 2.."
            }
            icon={<BsLink45Deg />}
            btext2={"45"}
            icon2={<IoFlash />}
            btext3={"14K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            btext5={"5.6K"}
            icon5={<FaDiscord />}
          />
          <CCards
            image={"logo3"}
            title={"Catalyze.one"}
            subtitle={"The platform for building engaged communities. ∞"}
            icon={<BsLink45Deg />}
            btext2={"30"}
            icon2={<IoFlash />}
            btext3={"4K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
          />
          <CCards
            image={"logo4"}
            title={"WB Network"}
            subtitle={
              "WhiteBIT Network Blockchain, based on Proof of Authority consensus."
            }
            icon={<BsLink45Deg />}
            btext2={"19"}
            icon2={<IoFlash />}
            btext3={"7K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
          />
          <CCards
            image={"logo5"}
            title={"ZKitty DAO"}
            subtitle={
              "Just a bunch of cosmic Kitties helping you farm airdrops on the zkSync blockchain."
            }
            icon={<BsLink45Deg />}
            btext2={"29"}
            icon2={<IoFlash />}
            btext3={"12K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            btext5={"1K"}
            icon5={<FaDiscord />}
          />
          <CCards
            image={"logo6"}
            title={"Influencio"}
            subtitle={
              "A decentralised platform for revolutionising the creator economy."
            }
            icon={<BsLink45Deg />}
            btext2={"20"}
            icon2={<IoFlash />}
            btext3={"5K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
          />
          <CCards
            image={"logo7"}
            title={"Skullx"}
            subtitle={"OG's of dark art based on Bitcoin and Ethereum"}
            icon={<BsLink45Deg />}
            btext2={"30"}
            icon2={<IoFlash />}
            btext3={"4K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            icon5={<FaDiscord />}
          />
        </CardContainer>
      </div>
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-white pt-0">Featured Communities</h1>
        <div className="flex flex-row mt-10">
          <div className="items-center">
            <SmallButton icon={<AiOutlineLeft />} click={scrollLeftTwo} />
          </div>
          <div className="items-center">
            <SmallButton icon={<AiOutlineRight />} click={scrollRightTwo} />
          </div>
        </div>
      </div>

      <div className="scrollable-container" ref={scrollContainerRefTwo}>
        <CardContainer>
          <CCards
            image={"flogo1"}
            title={"SlingShot"}
            subtitle={
              "Swap over 50k cryptocurrencies at the best prices with 0% swap fees. Live now on iOS.              "
            }
            icon={<BsLink45Deg />}
            btext2={"29"}
            icon2={<IoFlash />}
            btext3={"12K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            btext5={"11K"}
            icon5={<FaDiscord />}
          />
          <CCards
            image={"flogo2"}
            title={"Stepn"}
            subtitle={
              "Web3 lifestyle app with social & game elements for thrilling quests to earn XP"
            }
            icon={<BsLink45Deg />}
            btext2={"45"}
            icon2={<IoFlash />}
            btext3={"14K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            btext5={"5.6K"}
            icon5={<FaDiscord />}
          />
          <CCards
            image={"flogo3"}
            title={"Michelin 3xplorer Club"}
            subtitle={
              "Official Michelin 3xplorer Club to create unique experiences around motorsports"
            }
            icon={<BsLink45Deg />}
            btext2={"30"}
            icon2={<IoFlash />}
            btext3={"4K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
          />
          <CCards
            image={"flogo4"}
            title={"Stader Polygon"}
            subtitle={
              "The perfect onramp into the world of MATIC Liquid Staking              "
            }
            icon={<BsLink45Deg />}
            btext2={"19"}
            icon2={<IoFlash />}
            btext3={"7K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
          />
          <CCards
            image={"flogo5"}
            title={"Edu3Labs"}
            subtitle={
              "Edu3Labs is a new and innovative way to make learning more rewarding for everyone."
            }
            icon={<BsLink45Deg />}
            btext2={"29"}
            icon2={<IoFlash />}
            btext3={"12K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            btext5={"1K"}
            icon5={<FaDiscord />}
          />
          <CCards
            image={"flogo6"}
            title={"CerealGuyCoin_"}
            subtitle={
              "CerealGuyToken is a memecoin that will revolutionize the memecoins."
            }
            icon={<BsLink45Deg />}
            btext2={"20"}
            icon2={<IoFlash />}
            btext3={"5K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
          />
          <CCards
            image={"logo7"}
            title={"Skullx"}
            subtitle={"OG's of dark art based on Bitcoin and Ethereum"}
            icon={<BsLink45Deg />}
            btext2={"30"}
            icon2={<IoFlash />}
            btext3={"4K"}
            icon3={<FaUser />}
            icon4={<AiOutlineTwitter />}
            icon5={<FaDiscord />}
          />
        </CardContainer>
      </div>

      <div className="flex flex-row justify-between items-center -mt-10 mb-5">
        <h1 className="text-white ">Browse by community categories</h1>
        <div className="flex flex-row mt-1">
          <div className="items-center">
            <SmallButton icon={<AiOutlineLeft />} click={scrollLeftThree} />
          </div>
          <div className="items-center">
            <SmallButton icon={<AiOutlineRight />} click={scrollRightThree} />
          </div>
        </div>
      </div>
      <div
        className="overflow-x-auto no-scrollbar"
        ref={scrollContainerRefThree}
      >
        <CardContainerSmall>
          <TCards title={"All"} image={"/cbg1.webp"} />
          <TCards title={"Start"} image={"/cbg2.webp"} />
          <TCards title={"Gaming"} image={"/cbg3.webp"} />
          <TCards title={"Infrastructure"} image={"/cbg4.webp"} />
          <TCards title={"Defi"} image={"/cbg5.webp"} />
          <TCards title={"Music"} image={"/cbg1.webp"} />
          <TCards title={"Metaverse"} image={"/cbg2.webp"} />
          <TCards title={"Collectibles"} image={"/cbg3.webp"} />
          <TCards title={"Education"} image={"/cbg4.webp"} />
          <TCards title={"Art"} image={"/cbg5.webp"} />
        </CardContainerSmall>
      </div>
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-white pt-0">Upcoming Communities</h1>
        <div className="flex flex-row mt-10">
          <div className="items-center">
            <SmallButton icon={<AiOutlineLeft />} click={scrollLeftFour} />
          </div>
          <div className="items-center">
            <SmallButton icon={<AiOutlineRight />} click={scrollRightFour} />
          </div>
        </div>
      </div>
      <div
        className="overflow-x-auto no-scrollbar scrollable-container"
        ref={scrollContainerRefFour}
      >
        <CardContainer>
          <TimeCard
            title={"Raum Network"}
            image={"ulogo"}
            btntext={"in 4 hour(s)"}
            subtitle={
              "Secure storage meets decentralized finance - your assets, your control."
            }
          />
          <TimeCard
            title={"Codos Foundation"}
            image={"ulogo2"}
            btntext={"in 3 day(s)"}
            subtitle={
              "Codos rewards your sustainable commute with our new purpose-driven token. "
            }
          />
          <TimeCard
            title={"ROWA truncate"}
            image={"ulogo3"}
            btntext={"in 1 hour(s)"}
            subtitle={
              "ROWA, the Web3-based gaming platform that connects competitive games under a single ecosystem."
            }
          />
          <TimeCard
            title={"Raum Network"}
            image={"ulogo5"}
            btntext={"in 7 hour(s)"}
            subtitle={
              "A thrilling tale of betrayal, vengeance, and endurance. This is the World's first #Play2Earn PVP Combat game inspired by AI-Powered #Doge."
            }
          />
          <TimeCard
            title={"Island Journey"}
            image={"ulogo4"}
            btntext={"in 2 day(s)"}
            subtitle={`The Island Journey" is a project that will take you on an expedition to explore mysterious islands, remarkable creatures, and captivating phenomena through PFPs, trading cards, and a board game, all designed around the concept of "adventure"`}
          />
        </CardContainer>
      </div>
      <div className="flex ">
        <SpaceCard
          titleOne={"Dare to shape the future"}
          titleTwo={"with us."}
          subtitle={
            "Whether you are a contributor or a community manager, you will find what you are looking for."
          }
          image={"/limage.webp"}
        />
      </div>
    </>
  );
}

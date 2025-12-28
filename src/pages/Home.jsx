import Hero from '../components/Hero'
import Desc from '../components/Desc'
import Footer from '../components/Footer'
import QuickValue from '../components/QuickValue'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import HowToBuy from '../components/HowToBuy'
import CommunitySupport from '../components/CommunitySupport'


export default function Home() {
    return (
        <div className="">
            <Hero/>
            <Desc/>
            <QuickValue/>
            <Tokenomics/>
            <Roadmap/>
            <HowToBuy/>
            <CommunitySupport/>
            <Footer/>
        </div>
    )
}
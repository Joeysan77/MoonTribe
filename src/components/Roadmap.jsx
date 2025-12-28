import ScrollReveal from './animations/ScrollReveal'

export default function Roadmap() {

    const phases = [
        {
            phase: 1,
            info: 'Launch, Website, Community Build'
        },
        
        {
            phase: 2,
            info: 'Listings, Influencers, Marketing Push'
        },
        
        {
            phase: 3,
            info: 'Utilities, NFTs, Tribe Expansion'
        }
    ]

    return (
    <>
        <div className="line w90 my-20 gray-sm"></div>
    
        <div className="w90 blue-xs my-20 rounded-xl border border-white/10 p3 shadow-xl shadow-white/10">
            <p className="text-center my-5 text-2xl font-bold">Roadmap</p>
            
            <div className="border w90 border-white/10 rounded-xl mb-5 p-3">
                {phases.map((p) => {
                    return (
                        <Phase
                        phase={p.phase}
                        info={p.info}
                        />
                    )
                })}
            </div>
            
        </div>
    </>
    )
}

function Phase({phase, info}) {
    return (
    <ScrollReveal>
        <div>
            <div className="flex gap-5 twpri v-center ">
                <i className="fa fa-circle"></i>
                <p className="my-2 ">Phase {phase}</p>
            </div>
            <div className="mb-5 w90 text-lg font-medium">
                {info}
            </div>
        </div>
    </ScrollReveal>
    )
}
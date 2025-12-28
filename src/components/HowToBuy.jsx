import ScrollReveal from './animations/ScrollReveal'

export default function HowToBuy() {

    const steps = [
        {
            icon: 'fa-wallet',
            title: 'Create Wallet',
            desc: 'MetaMask or Trust Wallet'
        },
        
        {
            icon: 'fa-coins',
            title: 'Buy Crypto',
            desc: 'BNB or ETH'
        },
        
        {
            icon: 'fa-exchange-alt',
            title: 'Connect Swap',
            desc: 'Pancakeswap or Uniswap'
        },
        
        {
            icon: 'fa-rocket',
            title: 'Swap for MTB',
            desc: 'Get your MOONTRIBE tokens'
        }
    ]

    return (
        <div className="my-100">
            <p className="text-center text-3xl font-bold">How To Buy MTB</p>
            
            <div className="my-10">
                {steps.map((s) => {
                    return (
                        <Step
                        icon={s.icon}
                        title={s.title}
                        desc={s.desc}
                        />
                    )
                })}
            </div>
            
            <a href="https://t.me/Moontribes">
                <p className="text-center  text-white/50 underline">Join our Telegram for support </p></a>
            
        </div>
    )
}

function Step({icon, title , desc}) {
    return (
    <ScrollReveal>
        <div className="rounded-xl py-3 my-10 shadow-xl shadow-white/10 w90 wpri-sm border border-white/10">
            <div className="flex center my-3">
                   <i className={`fas ${icon} twpri text-3xl text-center`}></i>
            </div>
         
            <p className="text-lg font-medium text-center ny-3">{title}</p>
            <p className="text-white/50 text-center text-sm my-3">{desc}</p>
        </div>
    </ScrollReveal>
    )
}
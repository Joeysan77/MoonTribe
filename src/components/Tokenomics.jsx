import ScrollReveal from './animations/ScrollReveal'

export default function Tokenomics() {

    const data = [
        {
            data: 'Total Supply',
            value:'1,000,000 MTB'
        },
        
        {
            data: 'Liquidity',
            value:'50%'
        },
        
        {
            data: 'Community Rewards',
            value:'30%'
        },
        
        {
            data:'Marketing & Growth',
            value:'20%'
        }
    ]

    return (
        <div>
            <p className="text-center text-3xl font-bold my-10">Tokenomics</p>
            
            <div className="grid grid-cols-2 gap-4 w90">
                {data.map((d) => {
                    return (
                        <Data
                        data={d.data}
                        value={d.value}
                        />
                    )
                })}
            </div>
            
        </div>
    )
}

function Data({data, value}) {
    return (
    
    <ScrollReveal>
        <div className="bpri-sm border shadow-lg shadow-white/10 border-white/10 rounded-xl py-2 px-3">
            <p className="text-center text-white/50">{data}</p>
            <p className="text-xl font-semibold text-center my-2">{value}</p>
        </div>
    </ScrollReveal>
        
    )
}
import ScrollReveal from './animations/ScrollReveal'

export default function QuickValue() {

    const tag = [
        {
            icon: 'fa-group',
            title: 'Community-Powered',
            desc: 'Built and guided by the tribe itself.'
        },
        
        {
            icon: 'fa-treasure-chest',
            title: 'Long term rewards',
            desc:'Hold MTB and benefit from loyalty-focused mechanics.'
        },
        
        {
            icon: 'fa-cubes',
            title: 'Decentralized',
            desc: 'No central control; the tribe decides together.'
        },
        
        {
            icon: 'fa-moon',
            title: 'Moon-Focused',
            desc: 'Designed for collective growth and ambitious goals.'
        },
    ]

    return (
        <div>
            
            <div className="gray-sm line10 !my-25 w90 "></div>
            
            
            {tag.map((t) => {
                return (
                    <Tag
                    icon={t.icon}
                    title={t.title}
                    desc={t.desc}
                    />
                )
            })}
            
             <div className="gray-sm line10 !my-25 w90 "></div>
        </div>
    )
}

function Tag({icon, title, desc}) {
    return (
    
    <ScrollReveal>
        <div className="w90 border border-white/10 shadow-xl shadow-white/10 my-10 rounded-xl wpri-xs">
            <i className={` fas ${icon} text-2xl p-4 twpri`}></i>
            <p className="w90 text-lg font-medium">{title}</p>
            <p className="w90 text-sm my-3 text-white/50">{desc}</p>
            </div>
        </ScrollReveal>
        
    )
}
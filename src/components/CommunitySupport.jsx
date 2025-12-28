


export default function CommunitySupoort() {
    return (
        <div className="pb-50">
            <p className="text-2xl text-center font-bold">Join the Tribe</p>
            
            <p className="text-center my-8 w80 text-white/50 ">connect with our community and stay
updated on MOONTRIBE news.</p>

            <div className="flex around w60 v-center my-8">
                
                <Href
                src="telegram.png"
                href="https://t.me/Moontribes"
                text="Telegram"
                />
                <Href
                src="x.png"
                text="X - Twitter" 
                         href="https://x.com/MOONTRIBE__COIN?t=0wdraKKrnhYzZNJLKCc_mg&s=09"
                />
            </div>

        </div>
    )
}

function Href({href, src, text}) {
    return (
        <a href={href} className="flex flex-col center gap-3"> 
            <img src={src} className="h-20 p-5 border rounded-full border-white/10 rounded" alt=""></img>
        </a>
    )
}
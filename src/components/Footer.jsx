export default function Footer() {
    return (
        <div className="bpri-md py-8 ">
            <p className="text-center text-white/50 ">© 2025 MOONTRIBE. All Rights Reserved.</p>
            
              <div className="flex around w50 v-center my-8">
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
            
            <p className="text-sm w90 text-center text-white/50">MOONTRIBE (MTB) is a meme token; trade at your own risk. Not
financial advice</p>
            
            
        </div>
    )
}

function Href({href, src, text}) {
    return (
        <a href={href} className="flex flex-col center gap-3"> 
            <p className="text-white/20 text-xs">{text}</p>
            <img src={src} className="h-8 rounded" alt=""></img>
        </a>
    )
}
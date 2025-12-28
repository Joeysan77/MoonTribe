export default function Menu({show}) {
    return (
        <div className={`${show ? 'h-[270px]' : ' h-0 opacity-0 pointer-events-none'} pt-3  `}>
            
            
            <Button
            text="Home"
            />
            
            <Button
            text="Tokenomics"
            />
            
            <Button
            text="How to Buy"
            />
            
            
            <Button
            text="About us"
            />
            
            
            
            <div className="flex w80 my-5 between">
                <Links
                src="telegram.png"
                text="Telegram"
                href='https://t.me/Moontribes'
                />
                
                <Links
                src="x.png"
                text="X - Twitter"
                href='https://x.com/MOONTRIBE__COIN?t=0wdraKKrnhYzZNJLKCc_mg&s=09'
                />
            </div>
            
        </div>
    )
}

function Button({text}) {
    return (
        <div className="text-center font-medium my-5">
            {text}
        </div>
    )
}

function Links({text, src, href}) {
    return (
        <div className="border border-white/10 rounded-full pr-1 pl-3 py-1 flex center gap-3 black-sm">
            <a href={href} className="flex center gap-3">
                <p>{text}</p>
            <img className ="h-8 rounded-full"src={src} alt=""/>
            </a>
            
        </div>
    )
}
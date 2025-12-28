import Particles from './animations/Particles'
import ScrollReveal from './animations/ScrollReveal'


export default function Hero() {
    return (
        <div className="h-[600px] relative">
            <div className ="z-30"
            style={{ width:'100%', height: '600px', position:         
            'relative' }}>
               <Particles
                particleColors={['#ffffff', '#ffffff', '#001f6f', '#ff00f0']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                />
          </div>
          
          <div className="absolute top-0 left-0 ml-15 mt-20 z-20">
              <img src="moon.png" className="h-30" alt=""/>
          </div>
          
          <div className="absolute top-0 left-0 w-full mt-59 w80 ">
              
              <ScrollReveal>
                   <p className="text-center text-2xl "><p className="text-4xl  font-bold twpri my-3 ">MOONTRIBE</p> <p className="comic">— Built by Holders. Powered by the Tribe.</p></p>
             
              </ScrollReveal>
              
             
             <ScrollReveal>
                 <div className="flex between w90 my-10">
                 
                  <button className="py-2.5 px-5 font-medium bg-white/10 text-white/60 border border-white/20 rounded-full text-center text-sm">Learn More</button>
                   <button className="py-2.5 px-5 font-medium bg-white text-black/70 rounded-full text-center text-sm">Get Started</button>
              </div>
             </ScrollReveal>
              
              
          </div>



        </div>
    )
}
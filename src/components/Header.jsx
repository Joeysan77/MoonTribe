import {useState} from 'react'
import {Icon} from './Utilities'
import Menu from './Menu'

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="w-full fixed top-0 left-0 wpri-xs  pt-2 backdrop-blur-lg z-[50] rounded-3xl">
          <div className="flex between px-3 py-2 v-center">
                <div className="flex v-center gap-3 ">
                <Icon 
                className ="h-13 rounded-xl"
                />
                <p className="font-semibold text-xl twpri">MOONTRIBE</p>
            </div>
            <div className="flex gap-5">
                <i className="far fa-sun-bright text-lg white-sm py-1.5 px-3 rounded-xl"></i>
                <div 
                onClick={() => {
                    setShowMenu(prev => !prev)
                }}
                 className={`w-10 rounded-xl white-xs flex center ${showMenu ? '' : 'rotate-180'}`}>
                    <i className={` far ${showMenu ? 'fa-xmark' : 'fa-bars'} `}></i>
                </div>
            </div>
          </div>
          
          <div className={`border bpri-md rounded-b-3xl border-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 ${showMenu ? 'h-[270px]' : 'opacity-0 h-0'}`}>
              <Menu
              show={showMenu}
              />
          </div>
            
        </div>
    )
}
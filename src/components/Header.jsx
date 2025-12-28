import {useState} from 'react'
import {Icon} from './Utilities'
import Menu from './Menu'

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="w-full fixed top-0 left-0 wpri-xs pt-2 backdrop-blur-lg z-[50]">
          <div className="flex between px-3 py-2 v-center">
                <div className="flex v-center gap-3 ">
                <Icon 
                className ="h-13 rounded-xl"
                />
                <p className="font-semibold text-xl twpri">MOONTRIBE</p>
            </div>
            <div className="flex gap-5">
                <i className="far fa-sun-bright text-lg white-sm py-1.5 px-3 rounded-xl"></i>
                <i 
                onClick={() => {
                    setShowMenu(prev => !prev)
                }} 
                className={`far transform ${!showMenu ? 'fa-bars' : 'fa-xmark -rotate-180'} w-10 text-lg white-xs py-1.5 px-3 rounded-xl flex center `}></i>
            </div>
          </div>
          
          <div className={`border bpri-md rounded-b-xl border-white/10 ${showMenu ? '' : 'opacity-0 h-0'}`}>
              <Menu
              show={showMenu}
              />
          </div>
            
        </div>
    )
}
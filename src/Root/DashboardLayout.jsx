import { Outlet } from 'react-router'

import SideBar from '../components/SideBar'

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex bg-white'>
      {/* Left Side: Sidebar Component */}
    <SideBar></SideBar>
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

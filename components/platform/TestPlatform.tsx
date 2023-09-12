import React from 'react'
import TestListDashboard from './TestListDashboard'

const TestPlatform = () => {
  return (
    <div className=" w-full">
    <div className=" sm:px-0">
      <h3 className="text-base font-semibold leading-7 flex items-center justify-center text-gray-900">
        Test Dashboard
      </h3>
    </div>
    <TestListDashboard data =""/>
  </div>
  )
}

export default TestPlatform
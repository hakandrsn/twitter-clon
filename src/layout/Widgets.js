import React from 'react'
import { SearchIcon } from '../icon/icon'
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
    return (
        <div className='bg-white w-80'>
            <div className='flex item center space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
                <SearchIcon className="w-5 h-5" />
                <input type="text" placeholder='Search Twitter' className='placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm' />
            </div>
            <div className=''>

                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'Hakandrsn7'
                    }}
                    options={{
                        height: '1000'
                    }}
                />
            </div>
        </div>
    )
}

export default Widgets

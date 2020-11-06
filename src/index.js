import React, { Component } from 'react'

export default class HelmUI extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { schema, config } = this.props

    if (!schema || !config) {
      return (
        <div className="bg-red-100">
          Please provide a schema and its config
        </div>
      )
    }

    config.forEach((c) => {
      c.schema = subSchema(schema, c.schemaID)
    })

    console.log(config)

    return (
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            <a href="#"
               className="group bg-gray-50 rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:bg-indigo-100 transition ease-in-out duration-150"
               aria-current="page">
              <svg
                className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-indigo-500 group-hover:text-indigo-500 group-focus:text-indigo-600 transition ease-in-out duration-150"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="truncate">
                Account
              </span>
            </a>

            <a href="#"
               className="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
              <svg
                className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
              </svg>
              <span className="truncate">
                Password
              </span>
            </a>
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-500">Use a permanent address where you can receive
                    mail.</p>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First
                      name</label>
                    <input id="first_name"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last
                      name</label>
                    <input id="last_name"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email_address" className="block text-sm font-medium leading-5 text-gray-700">Email
                      address</label>
                    <input id="email_address"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-5 text-gray-700">Country /
                      Region</label>
                    <select id="country"
                            className="form-select mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="street_address" className="block text-sm font-medium leading-5 text-gray-700">Street
                      address</label>
                    <input id="street_address"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">City</label>
                    <input id="city"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">State /
                      Province</label>
                    <input id="state"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal_code" className="block text-sm font-medium leading-5 text-gray-700">ZIP /
                      Postal</label>
                    <input id="postal_code"
                           className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <span className="inline-flex rounded-md shadow-sm">
                  <button type="submit"
                          className="bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Save
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

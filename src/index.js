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
      );
    }

    config.forEach((c) => {
      c.schema = subSchema(schema, c.schemaID)
    })

    console.log(config)

    return (
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            <a href="#" className="group bg-gray-50 rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:bg-indigo-100 transition ease-in-out duration-150" aria-current="page">
              <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-indigo-500 group-hover:text-indigo-500 group-focus:text-indigo-600 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="truncate">
          Account
        </span>
            </a>

            <a href="#" className="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="truncate">
          Password
        </span>
            </a>

            <a href="#" className="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="truncate">
          Plan &amp; Billing
        </span>
            </a>

            <a href="#" className="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="truncate">
          Team
        </span>
            </a>

            <a href="#" className="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
              <svg className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <span className="truncate">
          Integrations
        </span>
            </a>
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 space-y-1 sm:col-span-2">
                    <label htmlFor="company_website" className="block text-sm font-medium leading-5 text-gray-700">
                      Username
                    </label>
                    <div className="rounded-md shadow-sm flex">
                <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                  workcation.com/
                </span>
                      <input id="username" className="form-input flex-grow block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="col-span-3 space-y-1">
                    <label htmlFor="about" className="block text-sm leading-5 font-medium text-gray-700">
                      About
                    </label>
                    <div className="rounded-md shadow-sm">
                      <textarea id="about" rows="3" className="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="you@example.com" />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div className="col-span-3 space-y-1">
                    <label className="block text-sm leading-5 font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="flex items-center">
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                      <span className="ml-5 rounded-md shadow-sm">
                  <button type="button" className="border border-gray-300 rounded-md py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                    Change
                  </button>
                </span>
                    </div>
                  </div>

                  <div className="col-span-3 space-y-1">
                    <label className="block text-sm leading-5 font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-2 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                      <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="mt-1 text-sm text-gray-600">
                          <button className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
                            Upload a file
                          </button>
                          or drag and drop
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <span className="inline-flex rounded-md shadow-sm">
            <button type="submit" className="bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Save
            </button>
          </span>
              </div>
            </div>
          </form>

          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-500">Use a permanent address where you can receive mail.</p>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                    <input id="first_name" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                    <input id="last_name" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email_address" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                    <input id="email_address" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-5 text-gray-700">Country / Region</label>
                    <select id="country" className="form-select mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="street_address" className="block text-sm font-medium leading-5 text-gray-700">Street address</label>
                    <input id="street_address" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">City</label>
                    <input id="city" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">State / Province</label>
                    <input id="state" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal_code" className="block text-sm font-medium leading-5 text-gray-700">ZIP / Postal</label>
                    <input id="postal_code" className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <span className="inline-flex rounded-md shadow-sm">
            <button type="submit" className="bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Save
            </button>
          </span>
              </div>
            </div>
          </form>

          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Notifications</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-500">Provide basic information about the job. Be specific with the job title.</p>
                </div>

                <fieldset>
                  <legend className="text-base leading-6 font-medium text-gray-900">By Email</legend>
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="h-5 flex items-center">
                        <input id="comments" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                        <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="h-5 flex items-center">
                          <input id="candidates" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
                          <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="h-5 flex items-center">
                          <input id="offers" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                          <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <legend className="text-base leading-6 font-medium text-gray-900">Push Notifications</legend>
                  <p className="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <input id="push_everything" name="push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                      <label htmlFor="push_everything" className="ml-3">
                        <span className="block text-sm leading-5 font-medium text-gray-700">Everything</span>
                      </label>
                    </div>
                    <div className="mt-4 flex items-center">
                      <input id="push_email" name="push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                      <label htmlFor="push_email" className="ml-3">
                        <span className="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                      </label>
                    </div>
                    <div className="mt-4 flex items-center">
                      <input id="push_nothing" name="push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                      <label htmlFor="push_nothing" className="ml-3">
                        <span className="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <span className="inline-flex rounded-md shadow-sm">
            <button type="submit" className="bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Save
            </button>
          </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

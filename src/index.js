import React, { Component } from 'react'
import Form from "@rjsf/core";

const CustomText = (props) => {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          className="form-input block w-full sm:text-sm sm:leading-5"
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </div>
    </div>
  );
};

const CustomCheckbox = (props) => {
  const {value} = props;
  const translate = value ? 'translate-x-5' : 'translate-x-0';
  const bg = value ? 'bg-indigo-600' : 'bg-gray-200';
  return (
    <span
      role="checkbox" tabindex="0"
      aria-checked={value}
      onClick={(event) => props.onChange(!value)}
      className={'${bg} mt-1 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline'}>
            <span
              aria-hidden="true"
              className={`${translate} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}></span>
        </span>
  );
};

const CustomDescription = (props) => {
  const {description} = props;
  return (
    <p className="text-sm text-gray-500">{description}</p>
  );
};

const CustomTitle = (props) => {
  const {title} = props;
  return (
    <label className="block text-sm font-medium leading-5 text-gray-700">
      {title}
    </label>
  );
};

const CustomFieldTemplate = (props) => {
  const {id, classNames, label, help, required, description, errors, children} = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}{required ? "*" : null}</label>
      {children}
      {description}
      {errors}
      {help}
    </div>
  );
}

const customFields = {
  DescriptionField: CustomDescription,
  TitleField: CustomTitle,
};

const customWidgets = {
  TextWidget: CustomText,
  CheckboxWidget: CustomCheckbox,
};

const log = (type) => console.log.bind(console, type);


export default class HelmUI extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedID: this.props.config[0].schemaID
    };
  }

  select (schemaID) {
    this.setState({
      selectedID: schemaID
    })
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
      c.schema = subSchema(schema, c.schemaID);
    })

    let selectedConfig = {};
    config.forEach((c) => {
      if (c.schemaID === this.state.selectedID) {
        selectedConfig = c;
      }
    })

    console.log(selectedConfig);

    selectedConfig.uiSchema = extendUISchema(selectedConfig.schema, selectedConfig.uiSchema);
    turnDescriptionToHintForLeaves(selectedConfig.schema, selectedConfig.uiSchema); // this should be, but doesn't work [selectedConfig.schema, selectedConfig.uiSchema] =
    selectedConfig.schema = trimRootTitle(selectedConfig.schema);

    console.log(selectedConfig);


    return (
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {
              config.map(c => {
                const selected = this.state.selectedID === c.schemaID;
                console.log()
                return (
                  <a href="#"
                     className={'group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium focus:outline-none transition ease-in-out duration-150 ' + (selected ? 'bg-gray-50 text-indigo-700 hover:bg-white' : 'text-gray-900 hover:bg-gray-50')}
                     aria-current="page"
                     onClick={() => this.select(c.schemaID)}
                  >
                    <svg
                      className={'flex-shrink-0 -ml-1 mr-3 h-6 w-6 transition ease-in-out duration-150 ' + (selected ? 'text-indigo-500 group-focus:text-indigo-600' : 'text-gray-400 group-focus:text-gray-500')}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={c.metaData.icon}
                      />
                    </svg>
                    <span className="truncate">
                      {c.metaData.name}
                    </span>
                  </a>
                )
              })
            }
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
              <Form
                schema={selectedConfig.schema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")}
                uiSchema={selectedConfig.uiSchema}
                // fields={customFields}
                // widgets={customWidgets}
                // FieldTemplate={CustomFieldTemplate}
                // className={styles('m-8')}
              />
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
        </div>
      </div>
    )
  }
}

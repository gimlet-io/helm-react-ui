import React, {Component} from 'react'
import Markdown from 'react-markdown'
import Form from '@rjsf/core'
import Ajv from "ajv"

const CustomCheckbox = (props) => {
  const {value, label} = props
  const translate = value ? 'translate-x-5' : 'translate-x-0'
  const bg = value ? 'bg-indigo-600' : 'bg-gray-200'
  return (
    <div>
      <label className="control-label">{label}</label>
      <span
        role="checkbox" tabIndex="0"
        aria-checked={value}
        onClick={(event) => props.onChange(!value)}
        className={`${bg} mt-1 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}>
              <span
                aria-hidden="true"
                className={`${translate} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}></span>
          </span>
    </div>
  )
}

const customWidgets = {
  CheckboxWidget: CustomCheckbox,
}

export default class HelmUI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ajv: new Ajv(),
      selected: this.props.config[0].metaData.name
    }
  }

  select(name) {
    this.setState({
      selected: name
    })
  }

  setSchemaValues(schema, schemaID, values, value) {
    const updatedValues = setSubSchemaValues(schema, schemaID, values, value)

    const valid = this.state.ajv.validate(schema, updatedValues)
    this.props.validationCallback(this.state.ajv.errors)

    this.props.setValues(updatedValues, filterDefaultValues(schema, JSON.parse(JSON.stringify(updatedValues))))
  }

  render() {
    const {schema, config, values, validate, validationCallback, fields} = this.props

    if (!schema || !config) {
      return (
        <div className="bg-red-100">
          Please provide a schema and its config
        </div>
      )
    }

    let schemasToRender = []
    let uiSchemaToRender = {}
    let valuesToRender = {}
    let _ = {}

    config.forEach((c) => {
      if (c.metaData.name === this.state.selected) {
        c.schemaIDs.forEach((schemaID) => {
          schemasToRender.push(JSON.parse(JSON.stringify(subSchema(schema, schemaID))))
          if (c.uiSchema[schemaID] === undefined) {
            uiSchemaToRender[schemaID] = {}
          } else {
            uiSchemaToRender[schemaID] = c.uiSchema[schemaID]
          }
        })
      }
    })

    function addMarkdownTagToHelpFields(uiSchema) {
      for (const key of Object.keys(uiSchema)) {
        if (uiSchema[key]["ui:help"]) {
          uiSchema[key]["ui:help"] = <Markdown children={uiSchema[key]["ui:help"]} />
        }
      }

      return uiSchema
    }

    schemasToRender.forEach((s) => {
      uiSchemaToRender[s.$id] = extendUISchema(s, uiSchemaToRender[s.$id])
      uiSchemaToRender[s.$id] = turnDescriptionToHintForLeaves(s, uiSchemaToRender[s.$id])
      uiSchemaToRender[s.$id] = addMarkdownTagToHelpFields(uiSchemaToRender[s.$id])
      uiSchemaToRender[s.$id] = makeArraysNonOrderable(s, uiSchemaToRender[s.$id])
      valuesToRender[s.$id] = subSchemaValues(schema, s.$id, values)
    })

    const sidebar = config.length > 1
    let gridClass = 'lg:grid lg:grid-cols-12 lg:gap-x-5';
    let gridSpan = 'lg:col-span-9'
    if (!sidebar) {
      gridClass = '';
      gridSpan = '';
    }

    return (
      <div className={gridClass}>
        {sidebar &&
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {
              config.map(c => {
                const selected = this.state.selected === c.metaData.name
                return (
                  <button
                     className={'group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium focus:outline-none transition ease-in-out duration-150 ' + (selected ? 'bg-gray-50 text-indigo-700 hover:bg-white' : 'text-gray-900 hover:bg-gray-50')}
                     aria-current="page"
                     onClick={() => this.select(c.metaData.name)}
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
                  </button>
                )
              })
            }
          </nav>
        </aside>
        }
        <div className={gridSpan}>
          {
            schemasToRender.map(s => {
                return (
                  <Form
                    key={s.$id}
                    onChange={e => this.setSchemaValues(schema, s.$id, values, e.formData)}
                    schema={s}
                    uiSchema={uiSchemaToRender[s.$id]}
                    formData={valuesToRender[s.$id]}
                    fields={fields}
                    widgets={customWidgets}
                    liveValidate={validate}
                  />
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

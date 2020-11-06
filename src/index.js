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

    return (
      <div className="bg-green-100">
        hello2
      </div>
    );

  }
}

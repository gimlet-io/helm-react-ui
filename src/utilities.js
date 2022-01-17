export function subSchema (schema, schemaID) {
  if (schema.$id === schemaID) {
    return schema
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      const found = subSchema(schema.properties[property], schemaID)
      if (found !== undefined) {
        return found
      }
    }
  }

  return undefined
}

export function subSchemaValues (schema, schemaID, values) {
  if (schema.$id === schemaID) {
    return values
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      if (values[property] !== undefined) {
        const found = subSchemaValues(schema.properties[property], schemaID, values[property])
        if (found !== undefined) {
          return found
        }
      }
    }
  }

  return undefined
}

export function setSubSchemaValues (schema, schemaID, values, value) {
  if (schema.$id === schemaID) {
    return value
  }

  if (values === undefined) {
    return values
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      const propertySchema = schema.properties[property];
      const v = setSubSchemaValues(schema.properties[property], schemaID, values[property], value)

      if (v !== undefined) {
        values[property] = v
      }

      if (propertySchema.type === 'string'
          && v === undefined
          && values[property] && values[property].length === 1) {
        values[property] = v
      }
    }
  }

  return values
}

export function filterDefaultValues (schema, values) {
  if (schema.default === values) {
    return undefined
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      if (values[property] !== undefined) {
        values[property] = filterDefaultValues(schema.properties[property], values[property])
        if (values[property] === undefined ||
          (Object.keys(values[property]).length === 0 && values[property].constructor === Object) ||
          JSON.stringify(values[property]) === '[]') {
          delete values[property]
        }
      }
    }
  }

  if (values === []) {
    return undefined
  }

  return values
}

export function extendUISchema (schema, uiSchema) {
  if (schema.properties === undefined) {
    return uiSchema
  }

  for (const property of Object.keys(schema.properties)) {
    if (uiSchema[property] === undefined) {
      uiSchema[property] = {}
    }

    uiSchema[property] = extendUISchema(schema.properties[property], uiSchema[property])
  }

  return uiSchema
}

export function turnDescriptionToHintForLeaves (schema, uiSchema) {
  if (schema.properties === undefined) {
    if (schema.description !== undefined) {
      uiSchema['ui:help'] = schema.description
      delete schema.description
    }
    return uiSchema
  }

  for (const property of Object.keys(schema.properties)) {
    uiSchema[property] = turnDescriptionToHintForLeaves(schema.properties[property], uiSchema[property])
  }

  return uiSchema
}

export function trimRootTitle (schema) {
  if (schema.properties !== undefined) {
    delete schema.title
    delete schema.description
  }

  return schema
}

export function makeArraysNonOrderable (schema, uiSchema) {
  if (schema.type === 'array') {
    uiSchema['ui:options'] = {
      orderable: false
    }
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      uiSchema[property] = makeArraysNonOrderable(schema.properties[property], uiSchema[property])
    }
  }

  return uiSchema
}

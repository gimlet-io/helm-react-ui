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

export function isLeaf (schema) {
  return schema.properties === undefined
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
      uiSchema['ui:help'] = schema.description;
      delete schema.description;
    }
    return [schema, uiSchema];
  }

  for (const property of Object.keys(schema.properties)) {
    [schema.properties[property], uiSchema[property]] = turnDescriptionToHintForLeaves(schema.properties[property], uiSchema[property])
  }

  return [schema, uiSchema];
}

export function trimRootTitle(schema) {
  if (schema.properties !== undefined) {
    delete schema.title;
    delete schema.description;
  }

  return schema
}

export function makeArraysNonOrderable (schema, uiSchema) {
  if (schema.type === 'array') {
    uiSchema['ui:options'] = {
      orderable: false
    };
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      uiSchema[property] = makeArraysNonOrderable(schema.properties[property], uiSchema[property])
    }
  }

  return uiSchema
}

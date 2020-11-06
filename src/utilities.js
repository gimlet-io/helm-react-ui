function subSchema(schema, schemaID) {
  if (schema.$id === schemaID) {
    return schema;
  }

  if (schema.properties !== undefined) {
    for (const property of Object.keys(schema.properties)) {
      const found = subSchema(schema.properties[property], schemaID);
      if (found !== undefined) {
        return found;
      }
    }
  }

  return undefined;
}

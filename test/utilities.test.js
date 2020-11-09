import {describe, it} from "@jest/globals";
import * as schema from '../fixtures/values.schema.json';
import { extendUISchema, subSchema, turnDescriptionToHintForLeaves } from '../src/utilities'

describe('subSchema', () => {
  it('should pick the right sub schema', () => {
    const s = subSchema(schema, '#/properties/namespace/properties/budget/properties/cpu');

    expect(s).toStrictEqual({
      "$id": "#/properties/namespace/properties/budget/properties/cpu",
      "type": "integer",
      "title": "The cpu schema",
      "description": "An explanation about the purpose of this instance.",
      "default": 0,
      "examples": [
        32
      ]
    });
  });

  it('should pick the right sub schema again', () => {
    const s = subSchema(schema, '#/properties/pod');

    expect(s).toStrictEqual({
      "$id": "#/properties/pod",
      "type": "object",
      "title": "The pod schema",
      "description": "An explanation about the purpose of this instance.",
      "default": {},
      "examples": [
        {
          "limits": {
            "cpu": 4,
            "memory": "8Gi"
          },
          "defaults": {
            "cpu": "200m",
            "memory": "200Mi"
          },
          "overcommit": {
            "cpu": 10,
            "memory": 2
          }
        }
      ],
      "required": [
        "limits",
        "defaults",
        "overcommit"
      ],
      "properties": {
        "limits": {
          "$id": "#/properties/pod/properties/limits",
          "type": "object",
          "title": "The limits schema",
          "description": "An explanation about the purpose of this instance.",
          "default": {},
          "examples": [
            {
              "cpu": 4,
              "memory": "8Gi"
            }
          ],
          "required": [
            "cpu",
            "memory"
          ],
          "properties": {
            "cpu": {
              "$id": "#/properties/pod/properties/limits/properties/cpu",
              "type": "integer",
              "title": "The cpu schema",
              "description": "An explanation about the purpose of this instance.",
              "default": 0,
              "examples": [
                4
              ]
            },
            "memory": {
              "$id": "#/properties/pod/properties/limits/properties/memory",
              "type": "string",
              "title": "The memory schema",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                "8Gi"
              ]
            }
          },
          "additionalProperties": true
        },
        "defaults": {
          "$id": "#/properties/pod/properties/defaults",
          "type": "object",
          "title": "The defaults schema",
          "description": "An explanation about the purpose of this instance.",
          "default": {},
          "examples": [
            {
              "cpu": "200m",
              "memory": "200Mi"
            }
          ],
          "required": [
            "cpu",
            "memory"
          ],
          "properties": {
            "cpu": {
              "$id": "#/properties/pod/properties/defaults/properties/cpu",
              "type": "string",
              "title": "The cpu schema",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                "200m"
              ]
            },
            "memory": {
              "$id": "#/properties/pod/properties/defaults/properties/memory",
              "type": "string",
              "title": "The memory schema",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                "200Mi"
              ]
            }
          },
          "additionalProperties": true
        },
        "overcommit": {
          "$id": "#/properties/pod/properties/overcommit",
          "type": "object",
          "title": "The overcommit schema",
          "description": "An explanation about the purpose of this instance.",
          "default": {},
          "examples": [
            {
              "cpu": 10,
              "memory": 2
            }
          ],
          "required": [
            "cpu",
            "memory"
          ],
          "properties": {
            "cpu": {
              "$id": "#/properties/pod/properties/overcommit/properties/cpu",
              "type": "integer",
              "title": "The cpu schema",
              "description": "An explanation about the purpose of this instance.",
              "default": 0,
              "examples": [
                10
              ]
            },
            "memory": {
              "$id": "#/properties/pod/properties/overcommit/properties/memory",
              "type": "integer",
              "title": "The memory schema",
              "description": "An explanation about the purpose of this instance.",
              "default": 0,
              "examples": [
                2
              ]
            }
          },
          "additionalProperties": true
        }
      },
      "additionalProperties": true
    });
  });
});


describe('extendUISchema', () => {
  it('should have a uiSchema for all schema fields', () => {
    const extended = extendUISchema({
      properties: {
        field: {},
        field2: {}
      }
    }, {})

    expect(extended).toStrictEqual({
      field: {},
      field2: {}
    });
  });

  it('should have a uiSchema for all schema fields again', () => {
    const extended = extendUISchema({
      properties: {
        field: {
          properties: {
            prop: {}
          }
        },
        field2: {}
      }
    }, {})

    expect(extended).toStrictEqual({
      field: {
        prop: {}
      },
      field2: {}
    });
  });

  it('should merge with existing uiSchema fields', () => {
    const extended = extendUISchema({
      properties: {
        field: {
          properties: {
            prop: {}
          }
        },
        field2: {}
      }
    }, {
      field: {
        prop: {
          "uiEntry": "value"
        }
      }
    })

    expect(extended).toStrictEqual({
      field: {
        prop: {
          "uiEntry": "value"
        }
      },
      field2: {}
    });
  });

  it('should merge with existing uiSchema fields again', () => {
    const extended = extendUISchema({
      properties: {
        field: {
          properties: {
            prop: {}
          }
        },
        field2: {}
      }
    }, {
      field: {
        "uiEntry": "value"
      }
    })

    expect(extended).toStrictEqual({
      field: {
        "uiEntry": "value",
        prop: {}
      },
      field2: {}
    });
  });
});


describe('turnDescriptionToHintForLeaves', () => {
  it('should turn description into ui:hint', () => {
    const [alteredSchema, extendedUISchema] = turnDescriptionToHintForLeaves({
      properties: {
        field: {
          description: 'random description'
        },
        field2: {}
      }
    }, {
      field: {
      },
      field2: {}
    })

    expect(alteredSchema).toStrictEqual({
      properties: {
        field: {},
        field2: {}
      }
    });

    expect(extendedUISchema).toStrictEqual({
      field: {
        "ui:help": 'random description'
      },
      field2: {}
    });
  });

  it('should turn description into ui:hint only for leaves', () => {
    const [alteredSchema, extendedUISchema] = turnDescriptionToHintForLeaves({
      properties: {
        field: {
          description: 'random description',
          properties: {
            prop: {}
          }
        },
        field2: {}
      }
    }, {
      field: {
        prop: {}
      },
      field2: {}
    })

    expect(extendedUISchema).toStrictEqual({
      field: {
        prop: {}
      },
      field2: {}
    });
  });
});

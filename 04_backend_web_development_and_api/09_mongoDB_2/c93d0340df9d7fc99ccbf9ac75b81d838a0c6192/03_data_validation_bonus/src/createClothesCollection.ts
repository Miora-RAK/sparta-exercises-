import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string < 30 characters and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string < 15 characters and is required",
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
      description: "must be only sweater",
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      description: "must be only a string in: `XXS`, `XS`, `S`, `M`, `L`, `XL`, `XXL`, or `XXXL`",
    },
  },
};

export const shoesProperties = {
  // write your shoes properties here
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string < 30 characters and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string < 15 characters and is required",
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
      description: "must be only sweater",
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
      description: "must be **only** a `integer` between `30` and `50`",
    },
    material: {
      bsonType: "string",
      enum: ["leather", "textile", "synthetic"],
      description: "must be **only** a string in `leather`, `textile`, or `synthetic` ",
    },
  },
};

export const pantsProperties = {
  // write your pants properties here
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string < 30 characters and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string < 15 characters and is required",
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
      description: "must be only sweater",
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
        },
        cut: {
          bsonType: "string",
          enum: ["slim", "skinny", "regular", "straight"],
        },

        description: "must be only a string in: slim, skinny, regular, straight",
      },
    },
  },
};

export const clothesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      oneOf: [
        { bsonType: "object", sweaterProperties },
        { bsonType: "object", pantsProperties },
        { bsonType: "object", shoesProperties },
      ],
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}

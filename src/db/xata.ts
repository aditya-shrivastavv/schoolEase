// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "teachers",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "N/A" },
      {
        name: "email",
        type: "email",
        notNull: true,
        defaultValue: "someone@example.com",
      },
      { name: "classes", type: "multiple" },
    ],
  },
  {
    name: "classes",
    columns: [
      { name: "name", type: "string", unique: true },
      { name: "section", type: "string" },
      { name: "colorCode", type: "string" },
      { name: "class", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Teachers = InferredTypes["teachers"];
export type TeachersRecord = Teachers & XataRecord;

export type Classes = InferredTypes["classes"];
export type ClassesRecord = Classes & XataRecord;

export type DatabaseSchema = {
  teachers: TeachersRecord;
  classes: ClassesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Aditya-Shrivastava-s-workspace-dnrfbn.us-east-1.xata.sh/db/school-ease",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};

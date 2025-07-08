import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
});


  $env:DATABASE_URL="libsql://landing-vf-decocx.turso.io"
  $env:DATABASE_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3NTIwMDAwNTcsImlhdCI6MTc1MTk5OTQ1NywiaWQiOiIxNTYxNDNhOC1jMGJkLTQ2M2EtOGFmMS0zZWE5NDc3YzBmYWYifQ.R2GE85YfpVq21VhzVKl9gKLL0c-3XtbYnal_MmVa_C6I_jMhJ2KP3kvx9em0BGK1GtQxSnYw-PO7Qj3EtSkDCw"

import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AgeDocument = Age & Document;

@Schema()
export class Age {
  id: string;

  @Prop({ type: Number })
  age: number;
}

export const AgeSchema = SchemaFactory.createForClass(Age);

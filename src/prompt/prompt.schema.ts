import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Prompt {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  prompt: string;

  @Field()
  @Prop()
  category: string;

  @Field()
  @Prop()
  description: string;

  @Field()
  @Prop()
  tags: string;

  @Field()
  @Prop()
  style: string;

  @Field()
  @Prop({ default: 0 })
  usageCount: number;

  @Field()
  @Prop({ default: true })
  isPublic: boolean;
}

export type PromptDocument = Prompt & Document;
export const PromptSchema = SchemaFactory.createForClass(Prompt);
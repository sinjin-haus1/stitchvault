import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePromptInput {
  @Field()
  title: string;

  @Field()
  prompt: string;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  tags?: string;

  @Field({ nullable: true })
  style?: string;
}
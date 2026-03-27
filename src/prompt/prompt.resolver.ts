import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Prompt } from './prompt.schema';
import { PromptService } from './prompt.service';
import { CreatePromptInput } from './prompt.input';

@Resolver(() => Prompt)
export class PromptResolver {
  constructor(private readonly promptService: PromptService) {}

  @Query(() => [Prompt])
  async prompts(): Promise<Prompt[]> {
    return this.promptService.findAll();
  }

  @Query(() => Prompt, { nullable: true })
  async prompt(@Args('id', { type: () => ID }) id: string): Promise<Prompt> {
    return this.promptService.findOne(id);
  }

  @Query(() => [Prompt])
  async promptsByCategory(
    @Args('category') category: string,
  ): Promise<Prompt[]> {
    return this.promptService.findByCategory(category);
  }

  @Query(() => [Prompt])
  async searchPrompts(@Args('query') query: string): Promise<Prompt[]> {
    return this.promptService.search(query);
  }

  @Mutation(() => Prompt)
  async createPrompt(@Args('input') input: CreatePromptInput): Promise<Prompt> {
    return this.promptService.create(input);
  }

  @Mutation(() => Prompt)
  async incrementPromptUsage(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Prompt> {
    return this.promptService.incrementUsage(id);
  }
}
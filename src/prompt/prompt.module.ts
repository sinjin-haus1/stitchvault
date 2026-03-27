import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prompt, PromptSchema } from './prompt.schema';
import { PromptResolver } from './prompt.resolver';
import { PromptService } from './prompt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }]),
  ],
  providers: [PromptResolver, PromptService],
})
export class PromptModule {}
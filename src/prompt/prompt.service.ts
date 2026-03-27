import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prompt, PromptDocument } from './prompt.schema';
import { CreatePromptInput } from './prompt.input';

@Injectable()
export class PromptService {
  constructor(
    @InjectModel(Prompt.name) private promptModel: Model<PromptDocument>,
  ) {}

  async findAll(): Promise<Prompt[]> {
    return this.promptModel.find().sort({ usageCount: -1 }).exec();
  }

  async findByCategory(category: string): Promise<Prompt[]> {
    return this.promptModel.find({ category }).sort({ usageCount: -1 }).exec();
  }

  async findOne(id: string): Promise<Prompt> {
    return this.promptModel.findById(id).exec();
  }

  async create(input: CreatePromptInput): Promise<Prompt> {
    const created = new this.promptModel(input);
    return created.save();
  }

  async incrementUsage(id: string): Promise<Prompt> {
    return this.promptModel.findByIdAndUpdate(
      id,
      { $inc: { usageCount: 1 } },
      { new: true },
    ).exec();
  }

  async search(query: string): Promise<Prompt[]> {
    return this.promptModel.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } },
      ],
    }).exec();
  }
}
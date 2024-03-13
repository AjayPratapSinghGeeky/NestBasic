import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Category{
    ADVENTURE = 'adventure',
    CLASSICS = 'classics',
    CRIME = 'crime',
    FANTASY = 'fantasy',
}

@Schema({ timestamps: true })



export class Book  {
  // Define your properties here using @Prop decorator if needed
  @Prop()
  title:string;

  @Prop()
  description:string

  @Prop()
  author:string;

  @Prop()
  price:number;

  @Prop()
  category:Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
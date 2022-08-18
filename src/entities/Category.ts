import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from "uuid"

@Entity("categories")
export class Category{
  @PrimaryColumn()
  id: String;

  @Column()
  name: string;

  @Column()
  description: String;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
  
}
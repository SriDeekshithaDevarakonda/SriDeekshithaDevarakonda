import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('your_mongodb_connection_string'),
  ],
})
export class DatabaseModule {}

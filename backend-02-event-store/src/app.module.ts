import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventStoreModule } from './eventstore.module';

@Module({
  imports: [ConfigModule.forRoot(), EventStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [ConfigModule.forRoot(), HeroesGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

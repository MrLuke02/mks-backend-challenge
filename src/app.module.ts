import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/users.module';

@Module({
  imports: [MoviesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

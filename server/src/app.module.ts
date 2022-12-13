import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import {
  UserModule,
  PostsModule,
  BookmarksModule,
  CommentsModule,
  LikesModule,
  StoriesModule,
  ViewersModule,
  FollowingModule,
} from './modules';

import config from './core/database/connection';
@Module({
  imports: [
    SequelizeModule.forRoot({
      ...config,
      sync: { force: false },
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
    UserModule,
    PostsModule,
    BookmarksModule,
    CommentsModule,
    LikesModule,
    StoriesModule,
    ViewersModule,
    FollowingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { CommentsService } from './comments.service';
import { CommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth-guard';
import { GetUser } from '../auth/decorator/user.decorator';
import { ValidationParamPipe } from '../../core/Pipes';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':postId')
  create(
    @Param('postId', ValidationParamPipe) postId: number,
    @Body()
    createCommentDto: CommentDto,
    @GetUser() userId: number,
  ) {
    return this.commentsService.create(createCommentDto, postId, userId);
  }

  @Get(':postId')
  findAll(@Param('postId', ValidationParamPipe) postId: number) {
    return this.commentsService.findAll(postId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id', ValidationParamPipe) id: number,
    @Body() updateCommentDto: CommentDto,
    @GetUser() userId: number,
  ) {
    return this.commentsService.update(updateCommentDto, id, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/post/:postId')
  remove(
    @Param('id', ValidationParamPipe) id: number,
    @Param('postId', ValidationParamPipe) postId: number,
    @GetUser() userId: number,
  ) {
    return this.commentsService.remove(id, postId, userId);
  }
}

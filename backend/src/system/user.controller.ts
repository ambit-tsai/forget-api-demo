import { defineExpose, Mark } from 'forget-api/nest';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('info/:id')
    getUserInfo(@Param() params: Mark<{ id: string }>) {
        return { code: 200, data: { id: params.id } };
    }

    @Post('info')
    updateUserInfo(@Body() data: Mark<{ id: string; name: string }>) {
        return { code: 200, message: 'success', data };
    }
}

export default defineExpose(UserController);

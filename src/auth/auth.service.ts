// src/auth/auth.service.ts
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  generateToken(user: User): string {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
  async register(
    registerDto: RegisterDto,
  ): Promise<{ access_token: string; tipo: string }> {
    const { email, senha, nome, tipo } = registerDto;

    const userExists = await this.usersRepository.findOne({ where: { email } });
    if (userExists) {
      throw new BadRequestException('Usuário já existe');
    }

    const hashedSenha = await bcrypt.hash(senha, 10);
    const user = this.usersRepository.create({
      email,
      senha: hashedSenha,
      nome,
      tipo,
    });

    const savedUser = await this.usersRepository.save(user);
    const token = this.generateToken(savedUser);

    return {
      access_token: token,
      tipo: savedUser.tipo,
    };
  }
  async validateUser(email: string, senha: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(senha, user.senha))) {
      return user;
    }
    return null;
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; tipo: string }> {
    const { email, senha } = loginDto;

    const user = await this.validateUser(email, senha);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      tipo: user.tipo,
    };
  }
}

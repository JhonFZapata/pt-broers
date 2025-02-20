import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SeedService } from './seed/seed';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pt_broers', {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('Conexión a MongoDB establecida');
        });
        connection.on('error', (error) => {
          console.error('Error de conexión a MongoDB:', error);
        });
        return connection;
      },
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // SeedService
  ],
})
export class AppModule {}

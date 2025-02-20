import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedService } from './seed/seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const seedService = app.get(SeedService);
  // await seedService.seed();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

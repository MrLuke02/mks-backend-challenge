import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { MoviesService } from './shared/movies.service';
import { Movie } from '../entities/movie';

@Controller('movies')
export class MoviesController {
    constructor(private movieService: MoviesService) {
    }

    @Post()
    async createMovie(@Body() params): Promise<Movie> {
        const movie = new Movie(params.name, params.description, params.releaseDate);
        return this.movieService.create(movie);
    }

    @Get()
    async getAll(): Promise<Movie[]> {
        return this.movieService.getAll();
    }

    @Get(":id")
    async getById(@Param('id') id): Promise<Movie> {
        return this.movieService.getById(id);
    }

    @Put()
    async updateMovie(@Body() params): Promise<Movie> {
        const movie = new Movie(params.name, params.description, params.releaseDate);
        movie.id = params.id;
        return this.movieService.update(movie);
    }

    @Delete(":id")
    async deleteMovie(@Param('id') id) {
        return this.movieService.delete(id);
    }
}

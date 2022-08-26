import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { MoviesService } from './shared/movies.service';
import { Movie } from '../entities/movie';

@Controller('movies')
export class MoviesController {
    constructor(private movieService: MoviesService) {
        console.log("aqui")
    }

    @Post()
    async createMovie(@Body() params) {
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
        return null
    }

    /*  @Delete(":id")
     async deleteMovie(@Param('id') id): Promise<Boolean> {
         return this.movieService.delete(id)
     } */
}

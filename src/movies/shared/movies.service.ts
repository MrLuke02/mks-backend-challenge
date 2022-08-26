import { Injectable } from '@nestjs/common';
import { getCustomRepository, getRepository } from 'typeorm';
import { Movie } from '../../entities/movie';

@Injectable()
export class MoviesService {

    private readonly repo = getRepository(Movie);

    async create(movie: Movie) {
        const savedMovie = this.repo.create(movie);
        const result = await this.repo.save(savedMovie)
        return result;
    }

    async getAll() {
        const result = await this.repo.find()
        return result;
    }

    async getById(id: string) {
        const result = await this.repo.findOne({ where: { id } })
        if (!result) {
            throw new Error("Not found")
        }
        return result;
    }

    async update(movie: Movie) {
        let originalMovie = this.getById(movie.id);
        /* if (originalMovie) {
            if (!(originalMovie.description == movie.description)) {
                originalMovie.description = movie.description
            } else if (!(originalMovie.name == movie.name)) {
                originalMovie.name = movie.name
            } else if (!(originalMovie.releaseDate == movie.releaseDate)) {
                originalMovie.releaseDate = movie.releaseDate
            } */

        console.log(originalMovie)
        return null;
    }

}

/* delete (id: string) {
    let originalMovie = this.getById(id);
    if (!originalMovie) {
        return false
    }

    return true
} */


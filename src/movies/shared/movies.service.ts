import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Movie } from '../../entities/movie';

@Injectable()
export class MoviesService {


    private repo = getRepository(Movie);

    async create(movie: Movie) {
        const savedMovie = this.repo.create(movie);
        const result = await this.repo.save(savedMovie)
        return result;
    }

    async getAll() {
        const result = await this.repo.find()
        if (!result) {
            throw new Error("Movie not found")
        }
        return result;
    }

    async getById(id: string) {
        const result = await this.repo.findOne({ where: { id } })
        if (!result) {
            throw new Error("Movie not found")
        }
        return result;
    }

    async update(movie: Movie) {
        let originalMovie = await this.getById(movie.id);
        if (originalMovie) {

            originalMovie.name = originalMovie.name == movie.name ? originalMovie.name : movie.name
            originalMovie.description = originalMovie.description == movie.description ? originalMovie.description : movie.description
            originalMovie.releaseDate = originalMovie.releaseDate == movie.releaseDate ? originalMovie.releaseDate : movie.releaseDate
            await this.repo.update(movie.id, movie);
            const updatedMovie = await this.getById(movie.id);
            return updatedMovie;
        }

        throw new Error("Movie not found")

    }

    delete(id: string) {
        let originalMovie = this.getById(id);
        if (!originalMovie) {
            throw new Error("Movie not found")
        }
        this.repo.delete(id)
        return "Success"
    }
}

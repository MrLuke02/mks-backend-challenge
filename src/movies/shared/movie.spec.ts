import { Movie } from '../../entities/movie'

describe('Movie', () => {
  it('should be defined', () => {
    expect(new Movie("Cpiderman", "filme", "hoje")).toBeDefined();
  });
});

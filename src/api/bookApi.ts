import axios from './axios';
import { BookType, Genre, QuerySearchOptions, User } from '../types';

export type SetRatingOptions = {
  bookId: number;
  rating: number;
}

export type AddCommentOptions = {
  bookId: number;
  text: string;
}

export type GetAllBooksOptions = {
  options: QuerySearchOptions;
}

type toggleFavoritesType = {
  bookId: number;
}

type GetAllBooksResponse = {
  books: BookType[];
  totalCount: number;
}

type GetAllGenresResponse = {
  genres: Genre[];
}

type GetOneBookResponse = {
  book: BookType;
}

type AddCommentResponse = {
  book: BookType;
  commentId: number
  date: Date;
  text: string
  user: User
}

const bookPath = '/book';

const getAllBooks = (data: GetAllBooksOptions) => {
  return axios.get<GetAllBooksResponse>(`${bookPath}/all`, {
    params: data.options,
  });
};

const getAllGenres = () => {
  return axios.get<GetAllGenresResponse>(`${bookPath}/genres`);
};

const getOneBook = (id: string) => {
  return axios.get<GetOneBookResponse>(`${bookPath}/${id}`);
};

const setRating = (data: SetRatingOptions) => {
  return axios.post(`${bookPath}/rate`, data);
};

const addComment = (data: AddCommentOptions) => {
  return axios.post<AddCommentResponse>(`${bookPath}/add-comment`, data);
};

const getRecommendations = () => {
  return axios.get<BookType[]>(`${bookPath}/recommendations`);
};

const getFavorite = () => {
  return axios.get<BookType[]>(`${bookPath}/favorites`);
};

const addToFavorite = (data: toggleFavoritesType) => {
  return axios.post<User>(`${bookPath}/add-favorites`, data);
};

const removeFromFavorite = (data: toggleFavoritesType) => {
  return axios.delete<User>(`${bookPath}/remove-favorites`, { data });
};

export default {
  getAllBooks,
  getAllGenres,
  getOneBook,
  setRating,
  addComment,
  getRecommendations,
  getFavorite,
  addToFavorite,
  removeFromFavorite,
};

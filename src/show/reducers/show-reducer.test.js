import reducer from './show-reducer';
import { searchShow, showListFound, loggedIn } from '../actions/show-actions';

describe('Reducer: Show', () => {
    describe('for SEARCH_SHOW', () => {
        it('should reset "showList" and set "isShowListLoading"', () => {
            const initialState = undefined;

            const result = reducer(initialState, searchShow('bazzinga!', 'i bims 1 token'));

            expect(result).toMatchObject({
                showList: [],
                isShowListLoading: true,
            });
        });
    });

    describe('for SHOW_LIST_FOUND', () => {
        it('should set "showList" and reset "isShowListLoading"', () => {
            const initialState = undefined;

            const result = reducer(initialState, showListFound([
                { id: 'i bims 1 show' },
            ]));

            expect(result).toMatchObject({
                showList: [ { id: 'i bims 1 show' } ],
                isShowListLoading: false,
            });
        });
    });

    describe('for LOGGED_IN', () => {
        it('should set "token"', () => {
            const initialState = undefined;

            const result = reducer(initialState, loggedIn('i bims 1 token'));

            expect(result).toMatchObject({
                token: 'i bims 1 token',
            });
        });
    });
});
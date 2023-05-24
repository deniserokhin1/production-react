import { TestAsyncThunk } from '06_shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchNextArticlePage } from './fetchNextArticlePage'
import { ArticleView } from '05_entities/Article'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

jest.mock('../fetchArticleList/fetchArticleList')

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                view: ArticleView.ROW,
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticleList).toBeCalledWith({ page: 3 })
    })
    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                view: ArticleView.ROW,
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticleList).not.toBeCalled()
    })
})

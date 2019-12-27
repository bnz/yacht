import { ThunkAction } from '../../helpers/types'
import { changeLanguage } from '../reducers/language'

export const changeLanguageThunk: ThunkAction = () => (dispatch, getState) => {
  const { language } = getState()
  dispatch(changeLanguage(language === 'rus' ? 'eng' : 'rus'))
  // eslint-disable-next-line no-self-assign
  window.location = window.location
}

import React, { FC } from 'react'
import { ListDivider } from '../ListParts/ListDivider'
import { ListItem } from '../ListParts/ListItem'
import { ButtonGroup } from '../DiceSizeChanger/ButtonGroup'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import { makeLanguageSelector } from '../../../../../redux/selectors/makeLanguageSelector'
import { i18n } from '../../../../../helpers/i18n/i18n'
import { changeLanguageThunk } from '../../../../../redux/actions/changeLanguageThunk'
import { useDispatchedCallback } from '../../../../../helpers/useDispatchedCallback'

const languageSelector = makeLanguageSelector()

export const LangChangeButtons: FC = () => {
  const language = useSelector(languageSelector)
  const onClick = useDispatchedCallback(changeLanguageThunk())

  return (
    <>
      <ListDivider />
      <ListItem
        button={false}
        icon={
          <ButtonGroup>
            <Button disabled={language === 'rus'} onClick={onClick}>
              рус
            </Button>
            <Button disabled={language === 'eng'} onClick={onClick}>
              eng
            </Button>
          </ButtonGroup>
        }
      >
        {i18n('language')}
      </ListItem>
    </>
  )
}

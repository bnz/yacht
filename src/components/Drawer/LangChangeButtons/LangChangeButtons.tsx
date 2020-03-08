import React, { FC } from 'react'
import { DrawerListDivider } from '../DrawerListDivider'
import { DrawerListItem } from '../DrawerListItem'
import { ButtonGroup } from '../DiceSizeChanger/ButtonGroup'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { makeLanguageSelector } from '../../../redux/selectors/makeLanguageSelector'
import { i18n } from '../../../helpers/i18n/i18n'
import { changeLanguageThunk } from '../../../redux/actions/changeLanguageThunk'

const languageSelector = makeLanguageSelector()

export const LangChangeButtons: FC = () => {
  const language = useSelector(languageSelector)
  const dispatch = useDispatch()
  const onClick = () => dispatch(changeLanguageThunk())

  return (
    <>
      <DrawerListDivider />
      <DrawerListItem
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
      </DrawerListItem>
    </>
  )
}

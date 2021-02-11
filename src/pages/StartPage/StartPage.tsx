import React, {FC, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import BigLogo from '@components/BigLogo'
import OportunityList from '@components/OportunityList'
import SignInButton from '@components/SignInButton'
import './StartPage.scss'

const StartPage: FC = () => {
  const history = useHistory<History>()

  useEffect(() => {
    if (localStorage.getItem('token'))
      history.replace('/')
  }, [])

  return (
    <div className="startPage">
      <div className="startPage__logo">
        <BigLogo/>
      </div>
      <div className="startPage__body">
        <OportunityList/>
        <div className="mt-15">
          <SignInButton/>
        </div>
      </div>
    </div>
  )
}

export default StartPage
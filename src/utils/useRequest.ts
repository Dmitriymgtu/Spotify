import { useEffect } from 'react'
import store from '@store/UserStore'
import { StatusCode } from './apiTypes'
import { paths } from '../config/routes'
import { Meta } from './meta'

const useRequest = () => {

  useEffect(() => {
    if (store.meta !== Meta.loading)
      Promise.all([store.fetchAlbums(true), store.fetchPlaylists(true)]).then(r => console.log(r)).catch(e => console.log(e))
  }, [])
}

export default useRequest
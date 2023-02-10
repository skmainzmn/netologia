import Loader from './Loader'
import ThemeList from './theme/ThemeList'
import axios from 'axios'
import { updateList, setAsFetched } from './features/theme/themeSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const isFetching = useSelector(state => state.theme.isFetching)
  const themes = useSelector(state => state.theme.list)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/netology-code/react-task/master/netology.json')
      .then(({ data }) => {
        dispatch(updateList(data.data))
        dispatch(setAsFetched())
      })
  }, [dispatch])

  return isFetching ? <Loader /> : <ThemeList items={themes} />
}

export default App;

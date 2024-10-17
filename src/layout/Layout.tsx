import React, {Fragment, useEffect, useState} from 'react'
import { useLocation } from "react-router-dom"
import { routes } from '../router/routes'
import RenderSidebar from './RenderSidebar'


const Layout = (props: any) => {
  const {children} = props

  const location = useLocation()
  const path = location.pathname

  const [blankRoute, setBlankRoute] = useState<Array<string>>([])

  const handleFilterBlank = () => {
    const newRoute = routes.filter(item => item?.blank === true)
    const result = newRoute.map(i => i.path)
    setBlankRoute(result)
  }

  const Wrapper = blankRoute.includes(path) === true ? Fragment : RenderSidebar

  useEffect(() => {
    handleFilterBlank()
  }, [])

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Layout
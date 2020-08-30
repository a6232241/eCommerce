import Index from './pages/Index'
import Apparel from './pages/Apparel'
import Styles from './pages/Styles'
import CommodityContainer from './pages/CommodityContainer'

const routes = [
  {
    path: '/',
    component: Index,
    exact: true,
    Name: 'Index',
    title: '主頁'
  },
  {
    path: '/apparel',
    component: Apparel,
    Name: 'Apparel',
    title: '服飾',
    children: [
      {
        path: '/apparel/:style',
        component: Styles,
        exact: true,
        Name: 'Styles',
        title: '類型',
      },
      {
        path: '/apparel/:style/:aid',
        component: CommodityContainer,
        Name: 'CommodityContainer',
        title: 'XXX'
      }
    ],
  },
]

export default routes

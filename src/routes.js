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
  },
  {
    path: '/apparel',
    component: Apparel,
    Name: 'Apparel',
    children: [
      {
        path: '/apparel/:style?',
        component: Styles,
        Name: 'Styles',
        children: [
          {
            path: '/apparel/:style?/:aid?',
            component: CommodityContainer,
            Name: 'CommodityContainer',
          },
        ],
      },
    ],
  },
]

export default routes

import User from '../components/User';
import Home from '../components/Home';
import Shop from '../components/Shop';
import News from '../components/News';
import ShopAdd from '../components/Shop/ShopAdd';
import ShopList from '../components/Shop/ShopList';
import ShopEdit from '../components/Shop/ShopEdit';

let routes = [{
    path: "/",
    component: Home,
    exact: true
},
{
    path: "/shop",
    component: Shop,
    routes: [  /* 嵌套路由 */
        {
            path: "/shop/",
            component: ShopList
        },
        {
            path: "/shop/add",
            component: ShopAdd
        },
        {
            path: "/shop/edit",
            component: ShopEdit
        }
    ]
},
{
    path: "/user",
    component: User
},
{
    path: "/news",
    component: News
}
];

export default routes;
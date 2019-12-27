import Home from "./components/Home/Home.vue";
import Pricing from "./components/Pricing/Pricing.vue";
import About from "./components/About Us/About.vue";
import Faq from "./components/FAQ/Faq.vue";
import Featured from "./components/Featured/Featured.vue";
import Blog from "./components/Blogs/Blog.vue";

export const routes=[
    {path:"",component:Home},
    {path:"/Pricing",component:Pricing},
    {path:"/Faq",component:Faq},
    {path:"/About",component:About},
    {path:"/Featured",component:Featured},
    {path:"/Blog",component:Blog},
    {path:"*",redirect:'/'}
]